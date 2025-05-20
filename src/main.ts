const convertBtn = document.getElementById("convertBtn") as HTMLButtonElement;
const jsInput = document.getElementById("jsInput") as HTMLTextAreaElement;
const coffeeOutput = document.getElementById("coffeeOutput") as HTMLElement;

declare const js2coffee: any;

convertBtn.addEventListener("click", () => {
  const jsCode = jsInput.value;

  try {
    const result = js2coffee.build(jsCode);
    const coffeeCode = typeof result === "string" ? result : result.code; // 🔑 ici !

    coffeeOutput.textContent = coffeeCode;
    (window as any).Prism.highlightElement(coffeeOutput);
  } catch (err: any) {
    coffeeOutput.textContent = "Erreur : " + err.message;
  }
});
