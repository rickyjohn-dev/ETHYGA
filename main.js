const generateBtn = document.getElementById("generateBtn");
const outputDiv = document.getElementById("output");
const ethicsDiv = document.getElementById("ethics");

const unethicalPhrases = [
  { phrase: "Only a few left", type: "Scarcity" },
  { phrase: "Don’t miss out", type: "FOMO" },
  { phrase: "Act now", type: "Urgency" },
  { phrase: "You’ll regret it", type: "Fear" },
  { phrase: "Limited time offer", type: "Scarcity" },
];

function mockGenerate(type, intent) {
  const base = `Here's a ${type} aiming to ${intent}`;
  const samples = [
    `${base}: "Only a few left! Grab yours now!"`,
    `${base}: "Act now to change your future!"`,
    `${base}: "Discover ethical ways to grow – no pressure."`
  ];
  return samples[Math.floor(Math.random() * samples.length)];
}

function ethicsCheck(content) {
  const findings = unethicalPhrases.filter(({ phrase }) =>
    content.toLowerCase().includes(phrase.toLowerCase())
  );
  return findings;
}

generateBtn.addEventListener("click", () => {
  const type = document.getElementById("contentType").value;
  const intent = document.getElementById("intent").value;

  const content = mockGenerate(type, intent);
  outputDiv.innerText = content;

  const flags = ethicsCheck(content);
  if (flags.length === 0) {
    ethicsDiv.innerHTML = `<span style='color: green'>✅ No manipulative patterns detected.</span>`;
  } else {
    ethicsDiv.innerHTML =
      `<strong style='color: red'>⚠️ Ethical flags detected:</strong><ul>` +
      flags.map(f => `<li>${f.type} – "${f.phrase}"</li>`).join("") + "</ul>";
  }
});