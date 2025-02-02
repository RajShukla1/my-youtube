var nameList = [
    'Fall','Jump','Cliff','Mountain','Rend','Red','Ahmed',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Akbar',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Pandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Thakur',
    'Mine','Your','Worst','Enemy','Hostile','Force','Arif',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Adnan',
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
export let images = [
  'https://yt3.ggpht.com/ytc/AIf8zZS82Tq0Id4OwFSc_Oko0ZHQOXKktPGx6qJScLfbhg=s68-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s68-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj'
]

let messages = [
  'so fat not even Dora can explore her',
  'so  fat I swerved to miss her and ran out of gas',
  'so smelly she put on Right Guard and it went left',
  'so fat she hasn’t got cellulite, she’s got celluheavy',
  'so fat she don’t need no internet – she’s already world wide',
  'so hair her armpits look like Don King in a headlock',
  'so classless she could be a Marxist utopia',
  'so fat she can hear bacon cooking in Canada',
  'so fat she won “The Bachelor” because she all those other bitches',
  'so stupid she believes everything that Brian Williams says',
  'so ugly she scared off Flavor Flav',
  'is like Domino’s Pizza, one call does it all',
  'is twice the man you are',
  'is like Bazooka Joe, 5 cents a blow',
  'is like an ATM, open 24/7',
  'is like a championship ring, everybody puts a finger in her'
]
export function generateRandomNameImage() {
  let idx = Math.floor( Math.random() * nameList.length );
   return [nameList[idx], images[idx%images.length]];
};

export function generateRandomImage(){
  return images[Math.floor( Math.random() * images.length )];
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


