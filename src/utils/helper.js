var nameList = [
    'Alex', 'Sarah', 'John Doe', 'TechNinja', 'GamingPro', 'MusicLover',
    'CreativeSoul', 'Wanderlust', 'FoodieLife', 'CoderBoy', 'DevGirl',
    'PixelArt', 'StreamFan', 'DailyVlogs', 'HappyCamper', 'Dreamer',
    'NightOwl', 'EarlyBird', 'CoffeeAddict', 'BookWorm', 'MovieGeek',
    'FitnessFreak', 'YogaGuru', 'Mindful', 'Peaceful', 'WildCard',
    'Rajesh', 'Priya', 'Amit', 'Sneha', 'Vikram', 'Neha'
];

let messages = [
  'First! 🥇',
  'Wow this is amazing! 🔥',
  'Hello from Brazil 🇧🇷',
  'Can you play Minecraft?',
  '😂😂😂',
  'RIP stream quality',
  'This is the best stream ever',
  'Love your videos! Keep it up ❤️',
  'Anyone here in 2026? 👇',
  'Please say my name!',
  'How long have you been streaming?',
  'What keyboard is that?',
  'Nice gameplay dude',
  'Bro is cracked 🤯',
  'I have been waiting all day for this',
  'W stream as always',
  'Can you do a setup tour?',
  'LMAO 💀',
  'This part is so funny',
  'Subbed! ✅',
  'Greetings from India 🇮🇳',
  'Can you speak Hindi?'
];

export function generateRandomNameImage() {
  let idx = Math.floor( Math.random() * nameList.length );
  let name = nameList[idx];
  let image = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=100`;
  return [name, image];
};

export function generateRandomImage(){
  let name = nameList[Math.floor( Math.random() * nameList.length )];
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=100`;
}

export function generateRandomMessage(){
  return messages[Math.floor( Math.random() * messages.length )];
}

export function makeRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
