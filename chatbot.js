
/* =========================================
   PAT3024 CORPORATE TAX CHATBOT
   Predefined Learning Assistant
========================================= */

(function () {

    // Prevent duplicate chatbot creation
    if (document.getElementById("pat3024-chatbot")) return;

    const style = document.createElement("style");

    style.textContent = `
        #pat3024-chatbot {
            position: fixed;
            bottom: 22px;
            right: 22px;
            z-index: 99999;
            font-family: Arial, sans-serif;
        }

        #pat3024-chat-toggle {
            width: 60px;
            height: 60px;
            border: none;
            border-radius: 50%;
            background: #17365d;
            color: white;
            font-size: 25px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,.25);
        }

        #pat3024-chat-window {
            display: none;
            width: 340px;
            height: 460px;
            max-width: calc(100vw - 32px);
            max-height: calc(100vh - 110px);
            background: white;
            border-radius: 14px;
            box-shadow: 0 5px 25px rgba(0,0,0,.2);
            overflow: hidden;
            margin-bottom: 12px;
            flex-direction: column;
        }

        #pat3024-chat-header {
            background: #17365d;
            color: white;
            padding: 16px;
        }

        #pat3024-chat-header strong {
            display: block;
            font-size: 16px;
        }

        #pat3024-chat-header small {
            color: #dbeafe;
        }

        #pat3024-chat-messages {
            flex: 1;
            padding: 14px;
            overflow-y: auto;
            background: #f4f7fc;
        }

        .pat-chat-message {
            padding: 10px 12px;
            border-radius: 10px;
            margin-bottom: 10px;
            max-width: 88%;
            font-size: 13px;
            line-height: 1.5;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
        }

        .pat-chat-bot {
            background: white;
            color: #263b53;
            border: 1px solid #dce5f0;
        }

        .pat-chat-user {
            background: #dceafe;
            color: #17365d;
            margin-left: auto;
        }

        #pat3024-chat-form {
            display: flex;
            gap: 7px;
            padding: 10px;
            border-top: 1px solid #e2e8f0;
        }

        #pat3024-chat-input {
            flex: 1;
            min-width: 0;
            padding: 11px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            outline: none;
            font-size: 13px;
        }

        #pat3024-chat-form button {
            background: #17365d;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 13px;
            cursor: pointer;
        }

        #pat3024-chat-toggle:hover,
        #pat3024-chat-form button:hover {
            background: #2563a5;
        }

        @media (max-width: 480px) {
            #pat3024-chatbot {
                right: 12px;
                bottom: 12px;
            }

            #pat3024-chat-window {
                width: calc(100vw - 24px);
                height: 430px;
            }
        }
    `;

    document.head.appendChild(style);

    const chatbot = document.createElement("div");
    chatbot.id = "pat3024-chatbot";

    chatbot.innerHTML = `
        <div id="pat3024-chat-window">
            <div id="pat3024-chat-header">
                <strong>💬 PAT3024 AI Assistant</strong>
                <small>Corporate Tax Learning Assistant</small>
            </div>

            <div id="pat3024-chat-messages">
            </div>

            <form id="pat3024-chat-form">
                <input
                    id="pat3024-chat-input"
                    type="text"
                    placeholder="Ask a tax question..."
                    autocomplete="off"
                    required
                >
                <button type="submit">Send</button>
            </form>
        </div>

        <button
            type="button"
            id="pat3024-chat-toggle"
            aria-label="Open PAT3024 chatbot"
            aria-expanded="false">
            💬
        </button>
    `;

    document.body.appendChild(chatbot);

    const chatWindow = document.getElementById("pat3024-chat-window");
    const toggleButton = document.getElementById("pat3024-chat-toggle");
    const messages = document.getElementById("pat3024-chat-messages");
    const chatForm = document.getElementById("pat3024-chat-form");
    const chatInput = document.getElementById("pat3024-chat-input");

    function addMessage(message, sender) {
        const bubble = document.createElement("div");

        bubble.className =
            "pat-chat-message " +
            (sender === "user" ? "pat-chat-user" : "pat-chat-bot");

        bubble.textContent = message;

        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    }

    function getBotReply(question) {

        const q = question.toLowerCase();

        if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
            return "Hello! Welcome to the PAT3024 Corporate Tax Learning Hub. What would you like to learn today?";
        }

        if (q.includes("section 140") || q.includes("140(1)")) {
            return "Section 140(1) of the Income Tax Act 1967 gives the Director General of Inland Revenue powers to disregard or vary certain arrangements in circumstances involving tax avoidance. Remember: an ordinary tax adjustment does not automatically mean tax avoidance.";
        }

        if (q.includes("capital allowance") || q.includes("depreciation")) {
            return "Capital allowances are tax deductions given for qualifying capital expenditure on assets used in a business. Accounting depreciation is generally added back when computing adjusted business income, while capital allowances are claimed under the relevant tax rules.";
        }

        if (q.includes("chargeable income")) {
            return "Chargeable income is generally determined after deducting allowable deductions from aggregate income, subject to the applicable tax provisions.";
        }

        if (q.includes("donation")) {
            return "For Case Study 2 Question 1, Maju Mampan Sdn Bhd has an approved Covid-19 fund donation of RM98,000 and a political party donation of RM70,000. Their tax treatment must be considered separately.";
        }

        if (q.includes("maju mampan") || q.includes("case study 2") || q.includes("question 1")) {
            return "Maju Mampan Sdn Bhd is the company in Case Study 2 Question 1. The case concerns its tax computation for the year ended 31 October 2025 (YA 2025). You can explore the supporting notes in Module 1 and the tax calculator in Module 2.";
        }

        if (q.includes("epf")) {
            return "For Case Study 2 Question 1, refer to Note 3 for staff remuneration and EPF contributions. Review the applicable tax deduction limits and supporting records before determining the tax treatment.";
        }

        if (q.includes("bad debt")) {
            return "For Case Study 2 Question 1, Note 9 includes trade debts written off, general provisions, specific provisions and bad debts recovered. These items need to be examined separately for tax purposes.";
        }

        if (q.includes("lease") || q.includes("motor vehicle")) {
            return "For Case Study 2 Question 1, Note 11 concerns motor vehicle lease rentals and a new car costing RM190,000. Consider the relevant restrictions under Section 39(1)(k) when reviewing the tax treatment.";
        }

        if (q.includes("risk") || q.includes("ethical") || q.includes("aadab")) {
            return "Module 3 explores Section 140(1), tax planning risk assessment and the AaDab Ethical Index. Its assessments are educational indicators and do not establish that a company has committed tax avoidance.";
        }

        if (q.includes("module 1")) {
            return "Module 1 is the Case Hub. It provides the case information, primary audit documents and supporting notes for Maju Mampan Sdn Bhd.";
        }

        if (q.includes("module 2") || q.includes("calculator")) {
            return "Module 2 is the Dynamic Form C Optimization Calculator. It helps students understand tax adjustments and the computation process.";
        }

        if (q.includes("module 3")) {
            return "Module 3 is AaDab Integrity & Section 140 Risk Scanner. It includes Section 140 learning, risk assessment, ethical evaluation and an important learning note.";
        }

        if (q.includes("module 4") || q.includes("legal")) {
            return "Module 4 is the Statutory Legal Explorer & Reflective Learning Hub. It helps students explore relevant legal provisions and reflect on corporate taxation.";
        }

        if (q.includes("thank")) {
            return "You're welcome! Keep learning and exploring the PAT3024 modules. 😊";
        }

        return "Thank you for your question! I currently have predefined answers about PAT3024, Case Study 2 Question 1 and the four learning modules. Try asking about Section 140(1), capital allowances, EPF, donations, bad debts or the tax calculator.";
    }

    toggleButton.addEventListener("click", function () {

        const isOpen = chatWindow.style.display === "flex";

        chatWindow.style.display = isOpen ? "none" : "flex";
        toggleButton.setAttribute("aria-expanded", String(!isOpen));

        if (!isOpen) {
            chatInput.focus();
        }
    });

    chatForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const question = chatInput.value.trim();

        if (!question) return;

        addMessage(question, "user");

        const reply = getBotReply(question);

        addMessage(reply, "bot");

        chatInput.value = "";
        chatInput.focus();
    });

    addMessage(
        "Hello! 👋 I'm your PAT3024 learning assistant. Ask me about Corporate Tax, Case Study 2 Question 1 or any of the four modules.",
        "bot"
    );

})();
