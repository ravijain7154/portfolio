import React, { useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  contactData,
  knowledgeSections,
  portfolioContext,
  portfolioFacts,
  quickQuestions,
  skillsData,
} from "../data/profileKnowledge";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_MODEL = process.env.REACT_APP_OPENAI_MODEL || "gpt-4.1-mini";

const starterMessage = {
  role: "assistant",
  text:
    "Hi, I'm Ravi's portfolio assistant. Ask me about his experience, skills, projects, or resume.",
};

const scoreSection = (question, section) => {
  const normalizedQuestion = question.toLowerCase();

  return section.keywords.reduce(
    (score, keyword) => score + (normalizedQuestion.includes(keyword) ? 1 : 0),
    0
  );
};

const getRelevantContext = (question) => {
  const sortedSections = [...knowledgeSections]
    .map((section) => ({ ...section, score: scoreSection(question, section) }))
    .sort((a, b) => b.score - a.score);

  const topSections = sortedSections.filter((section) => section.score > 0).slice(0, 3);

  if (topSections.length === 0) {
    return knowledgeSections.slice(0, 3).map((section) => section.content).join("\n");
  }

  return topSections.map((section) => section.content).join("\n");
};

const buildLocalReply = (question) => {
  const normalizedQuestion = question.toLowerCase();
  const relevantContext = getRelevantContext(question);

  if (
    normalizedQuestion.includes("contact") ||
    normalizedQuestion.includes("email") ||
    normalizedQuestion.includes("phone") ||
    normalizedQuestion.includes("resume") ||
    normalizedQuestion.includes("hire")
  ) {
    return `You can contact Ravi at ${contactData.email} or ${contactData.phone}. You can also open the resume from the Resume page or download it directly from ${contactData.resumePath}.`;
  }

  if (
    normalizedQuestion.includes("skill") ||
    normalizedQuestion.includes("stack") ||
    normalizedQuestion.includes("technology") ||
    normalizedQuestion.includes("react") ||
    normalizedQuestion.includes("shopify") ||
    normalizedQuestion.includes("wordpress")
  ) {
    return `Ravi's strongest skills include ${skillsData.frontend.join(
      ", "
    )}. He also works with ${skillsData.ecommerce.join(", ")}, ${
      skillsData.cms.join(", ")
    }, and ${skillsData.backend.join(
      ", "
    )}. His strengths include ${skillsData.strengths.join(", ")}.`;
  }

  if (
    normalizedQuestion.includes("project") ||
    normalizedQuestion.includes("portfolio") ||
    normalizedQuestion.includes("built") ||
    normalizedQuestion.includes("client")
  ) {
    const examples = portfolioFacts.featuredProjects
      .slice(0, 4)
      .map((project) => `${project.title} (${project.category})`)
      .join(", ");

    return `Ravi has delivered ${portfolioFacts.projectCountLabel} across ${portfolioFacts.projectCategories.join(
      ", "
    )}. Some examples are ${examples}. Most of his work focuses on polished storefronts, responsive business websites, and practical frontend solutions.`;
  }

  if (
    normalizedQuestion.includes("experience") ||
    normalizedQuestion.includes("work") ||
    normalizedQuestion.includes("career") ||
    normalizedQuestion.includes("years")
  ) {
    return `Ravi has ${portfolioFacts.yearsLabel} of experience. He is currently a Shopify Developer at Avalon Solution, working on custom themes, storefront UI, integrations, performance, SEO, and ecommerce features. Before that, he was a Frontend Developer at Braintree Products building responsive interfaces with HTML, CSS, and JavaScript.`;
  }

  return `${portfolioFacts.summary} ${relevantContext}`;
};

const extractResponseText = (data) => {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const parts = [];

  (data.output || []).forEach((item) => {
    (item.content || []).forEach((contentItem) => {
      if (contentItem.type === "output_text" && contentItem.text) {
        parts.push(contentItem.text);
      }
    });
  });

  return parts.join("\n").trim();
};

const generateOpenAIReply = async (question) => {
  const relevantContext = getRelevantContext(question);
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are Ravi Jain's portfolio assistant. Answer only from the provided portfolio context. Keep replies short, clear, and recruiter-friendly. If a detail is not in the context, say it is not listed in the portfolio.",
            },
          ],
        },
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: `Portfolio context:\n${portfolioContext}\n\nRelevant context:\n${relevantContext}`,
            },
          ],
        },
        {
          role: "user",
          content: [{ type: "input_text", text: question }],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("OpenAI request failed");
  }

  const data = await response.json();
  return extractResponseText(data);
};

function GenAISection() {
  const [messages, setMessages] = useState([starterMessage]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const assistantModeLabel = useMemo(
    () => (OPENAI_API_KEY ? `Live OpenAI mode (${OPENAI_MODEL})` : "Smart local portfolio mode"),
    []
  );

  const submitQuestion = async (rawQuestion) => {
    const trimmedQuestion = rawQuestion.trim();

    if (!trimmedQuestion || isLoading) {
      return;
    }

    const userMessage = { role: "user", text: trimmedQuestion };
    setMessages((current) => [...current, userMessage]);
    setQuestion("");
    setIsLoading(true);
    setStatus(OPENAI_API_KEY ? "Thinking with AI..." : "Searching Ravi's portfolio...");

    try {
      let reply = buildLocalReply(trimmedQuestion);

      if (OPENAI_API_KEY) {
        const aiReply = await generateOpenAIReply(trimmedQuestion);
        if (aiReply) {
          reply = aiReply;
        }
      }

      setMessages((current) => [...current, { role: "assistant", text: reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: `${buildLocalReply(trimmedQuestion)}\n\nNote: live AI mode could not be reached, so I answered from Ravi's local portfolio data instead.`,
        },
      ]);
    } finally {
      setStatus("");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitQuestion(question);
  };

  return (
    <Fade triggerOnce={true} direction="up">
      <section id="genai" className="genai-section mid-section mb-4">
        <div className="rich-text">
          <div className="genai-heading">
            <div>
              <span className="section-kicker">Gen AI</span>
              <h2 className="title-lg mb-3">Ask Ravi AI</h2>
              <p className="des mb-0">
                This chatbot helps recruiters and clients learn about Ravi's
                experience, skills, projects, and resume in a conversational way.
              </p>
            </div>
            <div className="genai-status">
              <span className="genai-status-dot"></span>
              {assistantModeLabel}
            </div>
          </div>

          <div className="row g-4 mt-1 align-items-stretch">
            <div className="col-lg-4">
              <div className="genai-panel h-100">
                <h3 className="genai-panel-title">What it can answer</h3>
                <div className="genai-usecase-list mb-3">
                  <article className="genai-usecase-card">
                    <h4>Experience Summary</h4>
                    <p>
                      Explains Ravi's Shopify, frontend, ecommerce, and UI work in
                      recruiter-friendly language.
                    </p>
                  </article>
                  <article className="genai-usecase-card">
                    <h4>Skills Snapshot</h4>
                    <p>
                      Highlights tools like Shopify, Liquid, React, WordPress,
                      JavaScript, PHP, SEO, and responsive UI.
                    </p>
                  </article>
                  <article className="genai-usecase-card">
                    <h4>Project Discovery</h4>
                    <p>
                      Summarizes portfolio work across Shopify, WordPress,
                      Squarespace, and custom HTML/PHP builds.
                    </p>
                  </article>
                </div>

                <div className="genai-metrics">
                  <div className="genai-metric-card">
                    <strong>{portfolioFacts.yearsLabel}</strong>
                    <span>Professional experience across frontend and ecommerce.</span>
                  </div>
                  <div className="genai-metric-card">
                    <strong>{portfolioFacts.projectCountLabel}</strong>
                    <span>Portfolio projects across multiple platforms and clients.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="genai-panel h-100">
                <div className="genai-chat-shell">
                  <div className="genai-chat-header">
                    <strong>Portfolio Chatbot</strong>
                    <span>{OPENAI_API_KEY ? "OpenAI connected" : "Local knowledge fallback"}</span>
                  </div>
                  <div className="genai-chat-body">
                    {messages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={`genai-message ${message.role === "assistant" ? "ai" : "user"}`}
                      >
                        {message.text}
                      </div>
                    ))}
                    {isLoading ? <div className="genai-message ai">Thinking...</div> : null}
                  </div>
                  <div className="genai-chat-actions">
                    {quickQuestions.map((quickQuestion) => (
                      <button
                        type="button"
                        key={quickQuestion}
                        className="genai-chat-chip"
                        onClick={() => submitQuestion(quickQuestion)}
                      >
                        {quickQuestion}
                      </button>
                    ))}
                  </div>
                  <form className="genai-chat-form" onSubmit={handleSubmit}>
                    <label htmlFor="portfolio-chat-input">Ask about Ravi</label>
                    <div className="genai-chat-input-row">
                      <textarea
                        id="portfolio-chat-input"
                        rows="2"
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                        placeholder="Example: What Shopify work has Ravi done?"
                      />
                      <button type="submit" className="btn custom_btn" disabled={isLoading}>
                        Send
                      </button>
                    </div>
                    {status ? <p className="genai-chat-status mb-0">{status}</p> : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default GenAISection;
