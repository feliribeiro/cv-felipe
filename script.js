let isPortuguese = true;

function toggleLanguage() {
    isPortuguese = !isPortuguese;

    const labels = {
        // Section Titles
        objectiveLabel: ["Objetivo", "Objective"],
        qualificationsLabel: ["Resumo das Qualificações", "Qualifications Summary"],
        educationLabel: ["Formação Acadêmica", "Academic Background"],
        experienceLabel: ["Experiência Profissional", "Professional Experience"],
        languagesLabel: ["Idiomas", "Languages"],
        skillsLabel: ["Informática – Linguagens de Programação", "IT – Programming Languages"],
        toolsLabel: ["Informática – Ferramentas", "IT – Tools"],
        certificationsLabel: ["Certificação", "Certification"],
        otherInfoLabel: ["Outras Informações", "Other Information"],

        // Contact
        careerLabel: ["Carreira:", "Career:"],
        contactLabel: ["Contato:", "Contact:"],
        emailLabel: ["E-mail:", "E-mail:"],
        linkedinLabel: ["LinkedIn:", "LinkedIn:"],

        // Qualifications
        qual1: [
            "Estudante de Engenharia de Software na PUCRS, com interesse em explorar diversas áreas da tecnologia para aprimorar habilidades técnicas e profissionais.",
            "Software Engineering student at PUCRS, with an interest in exploring various areas of technology to improve technical and professional skills."
        ],
        qual2: [
            "Experiência em Software Quality Assurance (QA), atuando com testes automatizados de UI e API utilizando Cypress.io e Karate Framework em Cucumber/Java.",
            "Experience in Software Quality Assurance (QA), working with automated UI and API tests using Cypress.io and Karate Framework in Cucumber/Java."
        ],
        qual3: [
            "Atuação na PROCERGS com metodologias ágeis e testes automatizados.",
            "Work at PROCERGS with agile methodologies and automated testing."
        ],
        qual4: [
            "Experiência na OVYVA Software, oferecendo suporte técnico e no pós-venda, além de realizar testes para a equipe de desenvolvimento.",
            "Experience at OVYVA Software, providing technical support and post-sales services, as well as performing tests for the development team."
        ],
        qual5: [
            "Participação na Agência Experimental de Engenharia de Software (AGES), desenvolvendo habilidades técnicas e interpessoais em projetos colaborativos.",
            "Participation in the Experimental Software Engineering Agency (AGES), developing technical and interpersonal skills in collaborative projects."
        ],
        qual6: [
            "Envolvimento em projetos relevantes, incluindo testes automatizados para o Aplicativo do Servidor RS e Login Cidadão, reforçando conhecimentos em ferramentas como Git, Cypress e Karate Framework.",
            "Involvement in relevant projects, including automated testing for the Servidor RS App and Login Cidadão, strengthening knowledge in tools such as Git, Cypress, and Karate Framework."
        ],
        qual7: [
            "Proficiência em inglês, facilitando a comunicação técnica e colaboração em ambientes globais.",
            "Proficiency in English, facilitating technical communication and collaboration in global environments."
        ],
        qual8: [
            "Proativo, adaptável e com forte capacidade de trabalho em equipe, buscando desafios para expandir conhecimentos na área de Engenharia de Software.",
            "Proactive, adaptable, and with strong teamwork skills, seeking challenges to expand knowledge in Software Engineering."
        ],

        // Education
        degreeLabel: [
            "Graduação em Engenharia de Software – PUCRS (em andamento)",
            "Software Engineering Degree – PUCRS (in progress)"
        ],
        highschoolLabel: [
            "Graduação no Ensino Médio – C.E.M Pastor Dohms – Unidade Taquari (2023)",
            "High School Graduation – C.E.M Pastor Dohms – Taquari Unit (2023)"
        ],

        // Professional Experience
        procergsLabel: [
            "PROCERGS – Porto Alegre, RS (06/2024 - Presente)",
            "PROCERGS – Porto Alegre, RS (06/2024 - Present)"
        ],
        ovyvaLabel: [
            "OVYVA Software – Instituto Caldeira, Porto Alegre, RS (05/2023 - 05/2024)",
            "OVYVA Software – Instituto Caldeira, Porto Alegre, RS (05/2023 - 05/2024)"
        ],

        // Languages
        portugueseLabel: ["Português: Nativo – C2", "Portuguese: Native – C2"],
        englishLabel: ["Inglês: Avançado – C1", "English: Advanced – C1"],

        // Skills
        javaLabel: [
            "Java: Avançado – Experiência no desenvolvimento de aplicações com Spring Boot.",
            "Java: Advanced – Experience in developing applications with Spring Boot."
        ],
        jsLabel: [
            "JavaScript: Avançado – Expertise na criação de aplicações web e scripts interativos com React.",
            "JavaScript: Advanced – Expertise in creating web applications and interactive scripts with React."
        ],
        gherkinLabel: [
            "Gherkin: Avançado – Experiência na escrita de testes em BDD.",
            "Gherkin: Advanced – Experience writing BDD tests."
        ],
        pythonLabel: [
            "Python: Intermediário – Desenvolvimento de APIs com FastAPI.",
            "Python: Intermediate – API development with FastAPI."
        ],

        // Tools
        gitLabel: ["Git: Controle de versão distribuído.", "Git: Distributed version control."],
        githubLabel: [
            "GitHub/GitLab: Hospedagem de código e versionamento.",
            "GitHub/GitLab: Code hosting and versioning."
        ],
        cypressLabel: ["Cypress.io: Automação de testes de UI.", "Cypress.io: UI testing automation."],
        karateLabel: [
            "Karate Framework: Testes automatizados de API com Cucumber/Java.",
            "Karate Framework: Automated API testing with Cucumber/Java."
        ],
        sqlLabel: [
            "SQL: Manipulação e consulta de dados em bancos relacionais.",
            "SQL: Manipulation and querying of data in relational databases."
        ],
        agileLabel: ["Metodologias Ágeis: Scrum e Kanban.", "Agile Methodologies: Scrum and Kanban."],

        // Certification
        englishCertLabel: [
            "Inglês – Proficiência fluente C1: Will Escola de Idiomas (2023)",
            "English – Fluent Proficiency C1: Will Language School (2023)"
        ],
        scrumCertLabel: [
            "Scrum Foundation – Professional Certification: (2024)",
            "Scrum Foundation – Professional Certification: (2024)"
        ],

        // Other Information
        agesLabel: [
            "Participação na Agência Experimental de Engenharia de Software (AGES): Desenvolvimento de soft skills e hard skills, colaborando em equipe na criação de um dashboard para a Polícia Civil.",
            "Participation in the Experimental Software Engineering Agency (AGES): Development of soft skills and hard skills, collaborating in a team to create a dashboard for the Civil Police."
        ],
        supportLabel: [
            "Experiência com suporte técnico e pós-venda: Atendimento a clientes, auxiliando na solução de problemas e garantindo a satisfação do usuário.",
            "Experience in technical support and post-sales: Customer service, helping solve problems, and ensuring user satisfaction."
        ],
        southSummitLabel: [
            "Participação no South Summit 2024, evento de inovação e empreendedorismo.",
            "Participation in South Summit 2024, an event of innovation and entrepreneurship."
        ],
        learningLabel: [
            "Interesse contínuo em aprendizado e inovação: Busca ativa por novos desafios e aprimoramento de habilidades.",
            "Continuous interest in learning and innovation: Actively seeking new challenges and skill improvement."
        ],
        addressLabel: ["Endereço: ", "Address: "],

        procergsLabel: [
            "PROCERGS – Porto Alegre, RS (06/2024 - Presente)",
            "PROCERGS – Porto Alegre, RS (06/2024 - Present)"
        ],
        ovyvaLabel: [
            "OVYVA Software – Instituto Caldeira, Porto Alegre, RS (05/2023 - 05/2024)",
            "OVYVA Software – Instituto Caldeira, Porto Alegre, RS (05/2023 - 05/2024)"
        ],
    };

    // Update all labels
    for (const [id, texts] of Object.entries(labels)) {
        document.getElementById(id).innerText = isPortuguese ? texts[0] : texts[1];
    }

    // Toggle button text
    document.querySelector(".button").innerText = isPortuguese ? "Switch to English" : "Mudar para Português";
}
