let isPortuguese = true;

function toggleLanguage() {
    isPortuguese = !isPortuguese;

    // Labels for Portuguese/English
    document.getElementById("objectiveLabel").innerText = isPortuguese ? "Objetivo" : "Objective";
    document.getElementById("qualificationsLabel").innerText = isPortuguese ? "Resumo das Qualificações" : "Qualifications Summary";
    document.getElementById("educationLabel").innerText = isPortuguese ? "Formação Acadêmica" : "Academic Background";
    document.getElementById("experienceLabel").innerText = isPortuguese ? "Experiência Profissional" : "Professional Experience";
    document.getElementById("languagesLabel").innerText = isPortuguese ? "Idiomas" : "Languages";
    document.getElementById("skillsLabel").innerText = isPortuguese ? "Informática – Linguagens de Programação" : "IT – Programming Languages";
    document.getElementById("toolsLabel").innerText = isPortuguese ? "Informática – Ferramentas" : "IT – Tools";
    document.getElementById("certificationsLabel").innerText = isPortuguese ? "Certificação" : "Certification";
    document.getElementById("otherInfoLabel").innerText = isPortuguese ? "Outras Informações" : "Other Information";

    // Content for Portuguese/English
    document.getElementById("careerLabel").innerText = isPortuguese ? "Carreira:" : "Career:";
    document.getElementById("contactLabel").innerText = isPortuguese ? "Contato:" : "Contact:";
    document.getElementById("emailLabel").innerText = isPortuguese ? "E-mail:" : "E-mail:";
    document.getElementById("linkedinLabel").innerText = isPortuguese ? "LinkedIn:" : "LinkedIn:";

    document.getElementById("portugueseLabel").innerHTML = isPortuguese ? "<strong>Português:</strong> Nativo – C2" : "<strong>Portuguese:</strong> Native – C2";
    document.getElementById("englishLabel").innerHTML = isPortuguese ? "<strong>Inglês:</strong> Avançado – C1" : "<strong>English:</strong> Advanced – C1";

    document.getElementById("name").innerText = isPortuguese ? "Felipe Ribeiro dos Santos" : "Felipe Ribeiro dos Santos";
    document.getElementById("buttonText").innerText = isPortuguese ? "Switch to English" : "Mudar para Português";
}
