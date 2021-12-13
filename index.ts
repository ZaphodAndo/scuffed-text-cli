const strings = Deno.args;

const convert = (text: string): string => {
  let uppercase = true;
  let convertedString = "";

  for (let i = 0; i < text.length; i++) {
    let character = text.charAt(i);

    if (uppercase) {
      character = character.toUpperCase();
      convertedString = convertedString + character;
      uppercase = false;
    } else {
      character = character.toLowerCase();
      convertedString = convertedString + character;
      uppercase = true;
    }
  }

  return convertedString;
};

for (const text of strings) {
  const convertedString = convert(text);
  console.log(convertedString);
}
