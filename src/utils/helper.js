
var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];
let images = [
  'https://yt3.ggpht.com/ytc/AIf8zZS82Tq0Id4OwFSc_Oko0ZHQOXKktPGx6qJScLfbhg=s68-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s68-c-k-c0x00ffffff-no-rj',
  'https://cdn.discordapp.com/guilds/816803002349781032/users/1155934125669240853/avatars/63fd78032511a702d989027c29c856ca.webp?size=160',
  'https://cdn.discordapp.com/avatars/1069171562843996200/7ea8974b5828d194f60bad18ef899a98.webp?size=100',
  'https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/IN_V8hbZ9KqI_Utvz60fFLnCSOGMVZiAsXwoHQA-HRjvcWygnLDOfnTFnllgAkzbiUYkaHhx=s68-c-k-c0x00ffffff-no-rj'
]
export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export function generateRandomImage(){
  return images[Math.floor( Math.random() * images.length )];
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