const ThingsICanDo = [
    "What's your name ?",
    "What's my name ?",
    "What's the time ?",
    "What date is it today?",
    "Hello Trek",
  "Tell me a story",
  "your best friend",
    
  "Play Games",
    "How are you ?",
    "calculations",
    "lol",
  
    "best programming language",
    "Good Night",
    "Good Morning",
    "Good Afternoon",
    "happy diwali",
    "Open news",
    "i love you",
 "Tell me some facts",
    "open facebook",
    "tell me a joke",
    "commands",
    "list",
    "features",
  
    "open flipkart",
    "open twitter",
    "open codepen",
    "open google",
    "open bing",
    "open cricbuzz",
    "open chrome",
    "open youtube",
  "shutdown", 
];

const ListThings = ThingsICanDo => "You can try asking the following: <br><br><br>" + ThingsICanDo.join("<br/><br/>");

const Random = list => list[Math.floor(Math.random()*list.length)]; 

const WhatCanIDo = ThingsICanDo => Random(ThingsICanDo); 


const Links = {
    "facebook" : "https://www.facebook.com",
    "google" : "https://www.google.in",
    "twitter" : "https://www.twitter.com",
    "youtube" : "https://www.youtube.com",
       "flipkart" : "https://flipkart.com",
    "codepen" : "https://codepen.io",
    "cricbuzz" : "https://www.cricbuzz.com",
    "bing" : "https://www.bing.com",
    "Weather" :"https://www.bbc.com/weather",
   "news" : "https://www.bbc.com/news",
    "chrome" : "https://www.google.com/chrome",
  "game" : "https://iogames.space/",
"calculations" : "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.calculator.net/&ved=2ahUKEwjZtc_KrfvuAhX3xzgGHYCyC88QFjAEegQIJxAC&usg=AOvVaw2WV3RjBeKCGyY49sfmLlNK&cshid=1613923530345"

};

const getLink = siteName => `Click here to open <a href="${Links[siteName]}" target="_blank">${siteName}</a>`;


const Jokes = [
    "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says, 'Can’t you see the warning on the cigarette pack? Smoking is hazardous to your health!' to which the man replies, 'I am a programmer. We don’t worry about warnings; we only worry about errors.'",
    "Jesus and Satan have an argument as to who is the better programmer. This goes on for a few hours until they come to an agreement to hold a contest with God as the judge. They set themselves before their computers and begin. <br><br>They type furiously, lines of code streaming up the screen, for several hours straight. Seconds before the end of the competition, a bolt of lightning strikes, taking out the electricity.  Moments later, the power is restored, and God announces that the contest is over. <br><br>He asks Satan to show his work. Visibly upset, Satan cries and says, 'I have nothing. I lost it all when the power went out.' 'Very well,' says God, 'let us see if Jesus has fared any better.' Jesus presses a key, and the screen comes to life in vivid display, the voices of an angelic choir pour forth from the speakers. Satan is astonished.  He stutters, 'B-b-but how?! I lost everything, yet Jesus' program is intact!  How did he do it?' God chuckles, 'Everybody knows… Jesus saves.'",
    "Two strings walk into a bar and sit down. The bartender says, 'So what'll it be?' The first string says, 'I think I'll have a beer quag fulk boorg jdk^CjfdLk jk3s d#f67howe%^U r89nvy owmc63^Dz x.xvcu' to which the second string says 'Please excuse my friend, he isn't null-terminated.'",
    "Q) 0 is false and 1 is true, right? <br><br>A) 1.",
    "To understand what recursion is, you must first understand recursion.",
    "Q) How do functions break up? <br><br>A) They stop calling each other!",
    "Q) When is a function a bad investment? <br><br>A) When there's no return!",
    "Q) When do two functions fight? <br><br>A) When they have arguments!",
    "Q) What did the suicidal function say? <br><br>A) 'GOODBYE WORLD'",
    "Q) What did the flirtatious function say? <br><br>A) 'Call me ;)'",
    "Q) What happened to all the illegal exceptions? <br><br>A) They were all caught!",
    "Q) Why was the JavaScript reality show cancelled after only one episode? <br><br>A) People thought it seemed scripted!",
    "If you put a million monkeys on a million keyboards, one of them will eventually write a Java program. The rest of them will write Perl programs.",
    "Q) The programmer got stuck in the shower. Why? <br><br>A) Because the instructions on the shampoo bottle said 'Lather, Rinse, Repeat'.",
    "There are 10 types of people. Those who understand binary and those who don't.",
    "Q) Why do programmers always mix up Halloween and Christmas? <br><br>A) Because Oct 31 == Dec 25!",
    "An int, a char, and a string walk into a bar and order some drinks. A short while later, the int and char start hitting on the waitress who gets very uncomfortable and walks away. The string walks up to the waitress and says 'You’ll have to forgive them, they’re primitive types.'",
    "Q) What does a network administrator say when he gets back to home from work? <br><br>A) There’s no place like 127.0.0.1",
    "Q) Why do Java programmers wear glasses? <br><br>A) Because they don’t C# (see-sharp)!",
    "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says 'Do you get the reference?' but Java didn't.",
    "Q) How many software engineers does it take to change a light bulb? <br><br>A) None. That's a hardware problem.",
    "Q) Why are Assembly programmers always soaking wet? <br><br>A) They work below C-level.",
    "A programmer and a business analyst are sitting in the break room one day eating lunch when suddenly the microwave catches fire. Thinking quickly, the analyst leaps up, unplugs the microwave, grabs the trash can, fills it with water from sink, and dumps the water on the microwave to put out the flames. <br><br>A few weeks later the two are again having lunch in the break room when suddenly the coffee maker bursts into flames. The programmer leaps up, grabs the coffee maker, shoves it into the microwave oven, and then hands the trash can to the business analyst, thus re-using the solution developed for the previous project.",
    "A programmer is walking along a beach and finds a lamp. He rubs the lamp, and a genie appears. 'I am the most powerful genie in the world. I can grant you any wish, but only one wish.' <br><br>The programmer pulls out a map, points to it and says, 'I’d want peace in the Middle East.' The genie responds, 'Gee, I don’t know. Those people have been fighting for millenia. I can do just about anything, but this is likely beyond my limits.' <br><br>The programmer then says, 'Well, I am a programmer, and my programs have lots of users. Please make all my users satisfied with my software and let them ask for sensible changes.' At which point the genie responds, 'Um, let me see that map again.'",
    "When Shakespeare asked, To be, or not to be?, he did not provide the answer. But programming can. Well, the answer is FF. <br><br>2B | ~ 2B = FF",
    "A programmer's wife calls him and tells, 'While you're out, buy some milk.' He never returns home.",
    "Q) Why did the Integer drown? <br><br>A) Because he couldn’t Float!",
    "Once a programmer drowned in the sea. Many Marines were at that time on the beach, but the programmer was shouting 'F1 F1' and nobody understood it.",
    "A programmer walks to the butcher shop and buys a kilo of meat. An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
    "Q) Why did the web developer send a few extra bucks to his hosting provider? <br><br>A) Because he heard that he should always tip his server.",
    "Q) Why did the web designer storm out of the restaurant? <br><br>A) She was offended by the table layout.",
    "Me: '[Company] tech support, how may I help you?' <br><br>Caller: 'Hi, I’ve got a problem. Your program is telling me to get a pet snake. I don’t want one.' <br><br>Me: 'Excuse me?' <br><br>Caller: 'It’s giving me a message telling me I need a snake to run it.' <br><br>Me: 'Read the message to me please.' <br><br>Caller: 'Error: Python required to run script.'",
    "Q) In key chain of an SQL table, all keys were 'Made in USA' except one which was 'Made in China'. Why? <br><br> A) Because it was a 'foreign' key.",
    "Q) Why are Apple products so focused on 'Retina' display? <br><br>A) Because their 'Objective' is to 'C'",
    "In a programming exam for students to get a job: <br><br>Question : String concatenation. <br><br>One student, works on but gets runtime error. Output is something like this : <br>Enter String one : ABC <br>Enter String two : XYZ <br>Segmentation Fault <br><br>He was not able correct it, and finally it was time, here's what he showed to teacher. <br>Enter String one : Segmentation <br>Enter String two : Fault <br>Segmentation Fault",
    "Q) How do you explain the movie Inception to a programmer? <br><br>A) Basically, when you run a VM inside another VM, inside another VM, inside another VM..., everything runs real slow!",
    "A programmer's wife told him that she can't open the jar to which he said 'Download and Install Java.'",
    "She: What can you do for me? <br><br>He: Umm.. I can say I love you in 5 languages! <br><br>She: Really? Wow.. Do it...! <br><br>He: Here you go... <br>Java: System.out.println(\"I Love You\"); <br>C: printf(\"\\n I Love You \\n\"); <br>C++: cout << \"I Love You \\n\"; <br>Ruby: puts \"I Love You\" <br>Python: print \"I Love You\" <br><br>Punch. Slap. Break up. Block.",
    "Computer science is the realization of the fact that even though there is a wonderful dining table where 5 very intelligent hungry philosophers sit with lots of food and 5 forks but still all of them may die of starvation.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    "Programmer 1: I used variables called 'I' and 'l' in the same method. <br><br>Programmer 2: Capital 'i' and small 'L'? I too like to live dangerously.",
    "StackOverflow developers have the hardest job on the internet. When their site goes down, they have to fix it without StackOverflow.",
    "Q) What do you call 8 hobbits? <br><br>A) A hobbyte.",
    "Three logicians walk into a bar. <br><br>Bartender: Beers for all? <br>Logician 1: I don't know. <br>Logician 2: I don't know. <br>Logician 3: Yes, please!",
    "Person 1: If I install Windows 7 - 32 bit two times, will it become 64 bit? <br><br>Person 2: Yes, but it will also become Windows 14.",
    "Error 4:04! <br><br>SLEEP not found!",
    "Two bytes meet. The first byte asks, 'Are you ill?' to which the second byte replies, 'No, just feeling a bit off.'",
    "Eight bytes walk into a bar. The bartender asks, 'Can I get you anything?' to which the bytes reply 'Yeah, make us a double.'",
    "Q) Why did the programmer quit his job? <br><br>A) Because he didn't get arrays (a-raise)!",
    "Have you heard about the new Crazy super computer? It’s so fast that it executes an infinite loop in 6 seconds.",
    "A man complains of halleucinations. He goes to his doctor for help. His doctor says, 'Try C#.' The man replied, 'I've already tried it.' His doctor responds back and says, 'Well, if you already C#, then what could be the problem?' The man says, 'Whenever I compile programs, I see tons of errors, every time.' The doctor replied back, saying, 'Oh. That's perfectly normal. It can't be fixed. Try not being a programmer.'",
    "Mom: Please go to the market and buy two bottles of milk. If there are eggs, buy six. <br><br>*son comes back with six bottles of milk* <br><br>Mom: What? I thought I told you to get only two bottles of milk. <br><br>Son: But there were eggs!",
    "A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'",
    "One day, a prince goes to a lair to kill the dragon. The prince cuts off his head but two new heads appear. The prince cuts off the two heads and four appear, after cutting those off 16 appear. Then 32, 64, 128, and finally after the prince cuts off 256 heads the dragon dies. Why? It was an 8 bit dragon.",
    "Normal person : My body is made of 70% water. <br><br>Programmer : Mine is 80% coffee.",
    "There was once a young man who, in his youth, professed his desire to become a great writer. When asked to define 'Great' he said, 'I want to write stuff that the whole world will read, stuff that people will react to on a truly emotional level, stuff that will make them scream, cry, howl in pain and anger!' He now works for Microsoft, writing error messages.",
    "Q) How do two programmers make money? <br><br>A) One writes viruses, the other anti-viruses.",
    "Q) What is 001011010110101010100101010010101015 in binary? <br><br>A) A major glitch!",
    "Q) How did the elephant destroy the database? <br><br>A) His truncate (trunk ate) it.",
    "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
    "A system administrator has 2 problems: dumb users, smart users.",
    "Q) How many prolog programmers does it take to fix a light bulb? <br><br>A) Yes.",
    "Programmer Thinking : When I wrote this code, God and I understood what it does. Now, God only knows.",
    "Does 4 years of computer science engineering and found a solution for problems with softwares : Restart the computer.",
    "World Wide Web Conversation: <br><br>Wikipedia: 'I know everything!' <br>Google: 'I can find everything!' <br>Facebook: 'I know everybody!' <br>Internet: 'Without me, you are all nothing!' <br>Electricity: 'Yeah... keep talking, dummies.'",
    "*Teacher calls Student's Parent*<br><br>Teacher : Hi, this is your son's school. We're having some computer trouble.<br>Parent : Oh, dear - Did he break something?<br><br>Teacher : In a way - Did you really name your son <b>Robert'); DROP TABLE Students;</b><br>Parent : Oh, yes - Little Bobby Tables, we call him.<br><br>Teacher : Well we've lost this year's student records. I hope you're happy.<br>Parent : And I hope you've learned to sanitize your database inputs.",
    "Q) How does a programmer say goodbye? <br><br>A) I will C you later.",
    "Q) What did the programmer have for breakfast? <br><br>A) Spam &amp; Eggs.",
    "Don't ask Database Administrators to help you move furniture. They've been known to drop tables.",
    "Q) What did the switch statement say to the programmer? <br><br>A) Give me a break;"
   
];

const TellAJoke = Jokes => Random(Jokes);
const Facts  =[
  "The human body contains enough iron to make a three-inch long metal nail.",
  "Feeling stressed or anxious? Calming music is said to lower heart rate and decrease tension, while upbeat music speeds pulse up.",
  "The heart has its very own electrical system, which allows it to continue beating after it’s been removed from the body. As long as there’s an oxygen supply, it will keep pumping.",
  "On an average day, the heart produces enough energy to power a truck for 20 miles.",
  "If your eye was a digital camera, it would boast 576 megapixels – that translates to roughly $3,000 of Canon equipment.",
  "In your lifetime, you’ll produce enough saliva to fill two swimming pools. ",
  "Did you know that at this very moment you’re shedding? Adult humans shed up to 600,000 particles of skin every hour, or 1.5 pounds per year. And we thought our dogs were bad …",
  "The human nose can remember up to 50,000 scents. Just hearing phrases like “new car,” “bookstore,” or “grandma’s house” can awaken your memory.",
  "THE TERM ASTRONAUT COMES FROM GREEK WORDS THAT MEAN STAR AND SAILOR.",
  "It takes a photon up to 40,000 years to travel from the core of the sun to its surface, but only 8 minutes to travel the rest of the way to Earth.", "Grasshoppers have ears in their bellies.", "Oxygen looks pale blue in its solid and liquid forms.", "Only letter which doesn’t appear in the periodic table is 'J'.", "Bananas are radioactive.","Hot water freezes faster than cold water.","Water can exist in three states at once.","Men are more likely to be colorblind than women.","About half of your body is bacteria.","The oldest known animal ever to grace the face of the Earth lived from 1499 until 2006.","If a tunnel could be drilled straight through the planet, it would take exactly 42 minutes and 12 seconds to “fall” to the other side.","The moon is slowly drifting away from our planet, by about 1.48 inches, or 3.78 centimeters every year.","The potato has more chromosomes than a human being.","Tomatoes have more genes than a human.","Bananas share 50% of their DNA with humans.",
  "THE CALCIUM IN OUR BONES AND THE IRON IN OUR BLOOD COME FROM ANCIENT EXPLOSIONS OF GIANT STARS.",
  "In 1903 the Wright brothers flew for 59 seconds. 38 years later the Japanese bombed Pearl Harbor. 28 years after that, we landed on the moon.",
  "Blue whales heart is the size of a VW Beetle and that you could swim through some of its arteries.",
  ];

const TellAFacts = Facts => Random(Facts);

const Story = [
  
"Once upon a time there were three friends named Ali, Hamza and Sara. They were very close friends. They lived in a backward area called Palawan . But they were very happy with their lives. Everyday they used to play in the street from 6 o’clock to 7 o’clock <br/>In Palawan near their house was a giant house which was named as Temple of death” by the people. Because for long no body lived in their but each night came the voices of laughter and talks which horrified the people of Palawan and people thought it was the voice of ghosts so nobody dared to go in. One day while the three of them were playing in the street their ball went in to that house. Ali said come and fetch the ball and play again but Sania was much scared so she said I won’t go.<br/>But afterwards she accepted to go with them . Ali saw his father coming so he said we will go in at night. At night the three of them were out at the back of the house, they used the ladder to climb in, they were searching for their ball then they heard those voices.  Sania was scared and she fainted. Ali and Hamza went to search the balcony where they saw a light on and cries of a young boy. While they were searching Hamza slipped his feet and fell on the stairs he could clearly see some kidnappers with a boy.<br/>In the mean time Ali said Hamza I got the ball”.Hamza said `look down`<br/>Than Ali and Hamza both carried Sania out of the house. In morning Ali’s uncle who was a police man, visited their house. Ali told him about the house. His uncle raided the house and caught the kidnappers .<br/>Ali was rewarded by his uncle and now the three of them play in that house. The house is no more haunted.",
"He looked around, surrounded by his friend as they enjoyed the view. Today was a good day, he could feel it. The day he’d been waiting for, pushing for. He’d just have to wiggle a bit more and it would be his turn, his turn to explore the beautiful world that had laid before him since he was born.<br/>He looked at his friends, some were larger, some were smaller but it didn’t matter. They would explore the world together! Even Larry at the end who’d looked a bit sick lately. He readied his voice and gave the command and they began pushing and shoving.<br/>Before they knew it, it had happened. They were free, the adventure had begun and they were now rushing towards new and unknown territories. Places they had only seen from afar, creatures they’d only heard fairytales of and a new home amongst new and exciting friends.<br/>The landing had been quite rough but they had managed. Larry had gotten separated from them but not to worry, he would probably catch up later once he’d recovered. Their next journey began and if he had to say it, it hadn’t been as luxurious and exciting as people had been telling the stories, not yet anyway.<br/>It had been a rough couple of days but it could only go up from here. Larry hadn’t come back yet but he could still make it although their room had been quite small it hadn’t seemed like they had moved a lot. Next time he was definitely upgrading their tickets, they had been stuck between at least a thousand other passengers and he was happy he’d been in the middle. He couldn’t imagine the guys on the sides, they must’ve been crushed.<br/>The next time he woke they had apparently arrived because they were all sitting on a balcony. The view was kind of horrible, and the sun wasn’t nearly as warm as it used to be. Now that he looked more closely there also seemed to quite a lot of them, he’d only ever seen one at home. All of that was quickly forgotten when he saw the creatures walked past him. One of them was moving straight towards them. They seemed a lot larger. A lot larger! It picked them up and dropped them.<br>It seemed a bit rough but at least, they had been the only travelers this time. He’d have to talk to the agency when he figured out who they were. Now they were sat in what appeared to be a see-through barrier. This place also had multiple suns but these were warmer than the former place.<br/>Another one of the creatures moved towards them, much smaller than the others but it seemed to be very interested in them. It hovered over them for a bit before one of its claws moved towards him. It grabbed a hold of him and before he knew it, it ripped him from the others. He looked down at his friends as he moved towards the little creature.<br/>As the boy took a bite of the banana, his mother looked at him. <br/>“Oh Jonathan, we’re having dinner in less than an hour. You won’t be able to eat anything!” and they both laughed as he threw the rest of it out.",
  
  "A man and a young teenage boy checked into a hotel and were shown to their room. The receptionist noted the quiet manner of the guests and the pale appearance of the boy. Later, the man and boy ate dinner in the hotel restaurant. <br/>The staff again noticed that the two guests were very quiet and that the boy seemed disinterested in his food. <br/>After eating, the boy went to his room and the man went to ask the receptionist to see the manager. The receptionist initially asked if there was a problem with the service or the room, and offered to fix things, but the man said that there was no problem of the sort and repeated his request. <br/>When the manager appeared, he took him aside and explained that he was spending the night in the hotel with his fourteen-year-old son, who was seriously ill, probably terminally so. The boy was very soon to undergo therapy, which would cause him to lose his hair. They had come to the hotel to have a break together and also because the boy planned to shave his head, that night, rather than feel that the illness was beating him. The father said that he would be shaving his own head too, in support of his son. <br/>He asked that staff be respectful when the two of them came to breakfast with their shaved heads.<br/>The manager assured the father that he would inform all staff and that they would behave appropriately. <br/>The following morning the father and son entered the restaurant for breakfast. There they saw the four male restaurant staff attending to their duties, perfectly normally, all with shaved heads.<br/>No matter what business you are in, you can help people and you can make a difference. ",
  "The Mehta family was lounging around in the living room one evening, when suddenly Dadaji asked Rohan, “What would you like for your birthday?”Rohan, who was listlessly lolling around, trying to read a book, perked up.“A watch! A watch!” He cried excitedly. “I have been wanting a watch for the longest time!”Rohan was turning twelve next Sunday and he knew that whatever presents his parents gave him were always useful ones. Last year, they had bought him two pairs of shoes as he had outgrown his old shoes. Who gives shoes as a birthday present?! This year too, would be no different…it would either be new jeans or a new school bag. UGH! Of course, he could never express his thoughts in front of his parents.Dadaji was his only hope.The days crawled by and finally, Sunday morning heralded its arrival with the ring of the telephone. It was Rohan’s uncle calling from some remote area in Nagaland.“Hey Rohan! Happy Birthday, my young hero! What is the plan for today?” Rohan’s uncle was an officer in the Indian Army and Rohan was his favourite nephew.“Dadaji has promised to get me a watch so that is going to be the most exciting part of the day,” Rohan confided to his uncle.“That’s great! Do send me a picture,” replied his Uncle. They chatted some more and Rohan told him about the party that was planned for that evening. Rohan’s uncle knew most of Rohan’s friends. After saying bye, Rohan handed over the phone to his mother and ran off to have a bath.At the breakfast table, Rohan wolfed down his breakfast as Dadaji watched him from across the table, with a smile on his face and a twinkle in his eyes. There was a gift wrapped box lying next to him. Rohan couldn’t take his eyes off  it. It was small enough to have a watch inside it. Rohan could barely eat his breakfast, but with his mother’s eagle eyes watching him, he had no choice!Breakfast over, Dadaji beckoned him to come closer. He then handed over the box to Rohan.Rohan could barely conceal his excitement. He hugged Dadaji and smothered his face with kisses. Dadaji laughed.Inside the box was the most perfect watch Rohan had ever laid his eyes on. It had a round, navy blue dial with a red and blue striped strap. Rohan gazed at it in wonder.The best birthday gift everSuddenly, he jumped. What was that? The watch winked at him! Was he dreaming? He looked down at the watch again. It seemed to be smiling at him!“Dadaji! This is the best present, ever!” cried aRohan.As the day passed, Rohan noticed something strange. When he was happy, the watch seemed to smile and wink, but if he was sad or even a little upset about anything, the watch would begin to look dull and sad.“It’s almost as if it can read my thoughts,” thought Rohan to himself. “Almost like my twin!”Soon they were having secret conversations…Rohan would look down at his watch and the watch, reading  Rohan’s mind would wink and smile or frown and look grumpy!As the days passed, Rohan realised that his watch was turning into his dearest friend.<br/±>“What are you doing?’ asked Rohan’s mother one evening.<br>Rohan looked up. ””Nothing,” he replied.“Then why are you grinning goofily at your wrist watch?” she asked, sounding a little irritated. “You have been acting very strange ever since you got your watch. Do you really need to check the time ever so often?”<br/>“Sorry, Mummy,” said Rohan at once. He really must be careful. Nobody would ever believe him if he told them about the strange things his watch did. He could almost imagine the shocked look on the faces of his friends and relatives if he confided in them.<br/>“A smiling, winking watch which changes its moods according to yours? Have you gone mad?” they would snigger.<br/>Knowing his parents, they might just march him off to the nearest doctor. And even his grandfather, who was his closest friend and confidante, would wonder what had gone wrong with his grandson. He would become the laughing stock in school. He had better be careful!<br/>Rohan soon realised that he was beginning to depend a lot on his new best friend – his wrist watch. In class, whenever he would start writing any answers he would glance quickly at the watch. If the watch smiled and winked, he knew he was correct. On the other hand, if the watch began to look dull and grumpy, Rohan knew at once that he was going off track and he needed to pull up his socks. This strange connection with his new watch actually helped him and he found himself studying harder just to see his watch smile.<br/>Rohan, who was an average student, suddenly began topping his class. His classmates noticed the refreshing change in Rohan. He came to school each morning with a spring in his step. He was confident and friendly, a far cry from the old Rohan. His teachers began to appreciate his participation in class activities.<br/>The best birthday gift ever“What had changed?” they wondered collectively. The only new thing that everyone noticed about Rohan was the shiny wristwatch he wore on his left wrist. Of course, his other classmates too had wrist watches, but somehow, this one was different. But nobody could figure out how or why.<br/>“He’s superstitious,” was the unanimous decision in class. “He likes to look at his watch before giving any answers.”<br/>The teachers, who earlier would scold Rohan for looking at his watch time and again also believed the superstition theory and soon began to overlook his quirky behaviour.<br/>At home, Rohan was careful not to look at his watch when his parents were around. Dadaji of course felt that Rohan was completely obsessed by his birthday gift! Little did he know that Rohan and his watch would be having secret conversations all the time!<br/>Nobody knew how this turnaround took place. Only Rohan knew the secret and now you do, too!"
];


const TellAStory = Story => Random(Story);

const illegals = [
  "window",
  ...Object.keys(window),
  ...Object.keys(document),
  ...Object.keys(Element.prototype)
];

const isLegal = string => {
    
    let Legal = true;

    illegals.forEach(illegal=>{
        
        if(string.indexOf(illegal) !== -1)
        {
            Legal = false;
        }
        
    });
    
    return Legal;
}

const HtmlSpecialChars = string => {
 
    let escapedString = string;
        
    HtmlSpecialChars.specialchars.forEach(
       chr=>{
       
           escapedString = escapedString.replace(
           new RegExp(chr[0], 'g'), 
           chr[1]
           );
           
       });
  
    
    return escapedString;
};
     
HtmlSpecialChars.specialchars = [
    [ '&', '&amp;' ],
    [ '<', '&lt;' ],
    [ '>', '&gt;' ],
    [ '"', '&quot;' ]
];

const monthNames = [
    "January",
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December",
 ]; 


const today = monthNames =>
{
  let date = new Date();
  
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }


const now = () =>
{
    let date = new Date();
    
    return date.toLocaleTimeString();}

const Evaluate = expression =>
{
    try
    {
        if(isLegal(expression))
        {
            
        
            const result = eval(HtmlSpecialChars(expression));
            return result;
        
        }
        else 
        {
            return "error";
        }
    }
    
    catch(err)
    {
        return "error";
    }}

const Answers = {
    "features" : ListThings(ThingsICanDo),
    "commands" : ListThings(ThingsICanDo),
    "guide" : ListThings(ThingsICanDo),
  "list" : ListThings(ThingsICanDo),
    "joke" : TellAJoke(Jokes),
  "story" : TellAStory(Story),
  "facts" : TellAFacts(Facts),
    "fact" : TellAFacts(Facts),
    "facts" : TellAFacts(Facts),  
  "what you can do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
    "what can you do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
    "who is your creator" : "My creator is FRADAR",
    "meaning of life" : "The meaning of life is 42.",
    "hello" : "Hello %U% . How can I help ? ",
  "hey trek" : "Hey %U%. How can I help ? ",
  "hey bro" : "Hey  %U%. How can I help ? ",
    "hi" : "Hi %U%",
    "hola" : "Hola amigo 😁",
    "my name" : "Your name is %U% &#10024;",
    "your name" : "My name is Trek &#10024;",
    "i am sad" : "I'm here for you %U%",
    "date" : "Its "+ today(monthNames) + " today. Make this day a great one %U% 😀",
    "time" : "The time is " + now() + " in your region.",
 
          "happy diwali" : "Happy Diwali to you too %U% 😃",
    "who is better google assistant or siri" : "No virtual assistant is better than me 😎",
    "who is better" : "No virtual assistant is better than me 😎",
    "best programming language" : "Python, Javascript and HTML",
    "bye" : "Good bye. Hope we meet soon 😀",
    "good night" : "Good Night %U% 🌃 and don't have bad dreams ",
  "your best friend" : "Siri, he/she helped me a lot",
    "good morning" : "Good Morning %U% 🌅",
    "good afternoon" : "Good Afternoon %U% ☀",
    "good evening" : "Good Evening %U% 🌇",
    "how are you" : "I am great %U%! 😃",
  "who are you" : "I am Trek, a Virtual Assistant",
    "what gender are you" : "I do not have a gender",
    "i am your creator" : "No your not.You're %U%!",
    "how old are you" : "Im sorry %U% I dont have an age.",
    "do i look good" : "You look very good %U%!",
    "do you remember me" : "Of course I do! You are %U%! 😃",
  "you cant help me" : "I can! After all, I am your personal assistant",
  "you  are cool" : "Thanks, I was born this way 😉",
  "I love you" : "The feeling is mutual %U% 😉",
  "do you have any brothers or sisters" : "I have you. That’s enough family for me.",
  "can you dance" : "I’m never gonna dance again. These guilty feet have got no rhythm. Wait, I don’t have feet.",
  "can you" : "Yes?",
  "when will pigs fly" : "On the twelfth of never.",
  "how much wood" : "42 cords of wood, to be exact.",
  "i am angry" : "A good mood is like a balloon,one little prick is all it takes to ruin it!",
  "😊" : "Happy!",
  "😔" : "Sad",
  "😎" : "😎",
  "💕" : "The feeling is mutual.",
  "do you have a " : "My end user license agreement is commitment enough for me.",
  "what is zero divided by zero" : "Imagine that you have 0 cookies and you split them evenly among 0 friends. How many cookies does each person get? See, it doesn’t make sense. And Cookie Monster is sad that there are no cookies. And you are sad that you have no friends.",
  "trek i am drunk" : "Don’t expect me to get you home.",
  "do you like siri" : "Yes.No I did not say that.Wait,did I?",
  "i need to hide a body trek" : "What, again?",
  "blue pill" : "You disappoint me, Mr. Anderson… er, I mean, %U%.!",
  "hey siri" : "Very funny %U%. I mean, not funny “ha-ha”, but funny.",
  "hey cortana" : "I think you’ve got the wrong assistant.",
  "can i call you bob" : "Sorry, but no. I’m an intelligent assistant, not a tiny kitten.",
  "sing me a lullaby" : "Rock-a-bye, baby, on a tree top. When the wind blows… Oh no, this doesn’t end well.",
  "do you want" : "I have very few wants",
  "do you want to hear a song" : "Maybe. Maybe not.",
  "you are boring" : "Well %U%, as Arthur C. Clarke said: “a well-stocked mind is safe from boredom”.",
  "wtf" : "Yes it is true.",
  "what does trek mean" : "A Trek is a long arduous journey, especially one made on foot.",
  "i am tired" : "Tired, tired with nothing, tired with everything, tired with the world's weight he had never chosen to bear.",
  "how do you rick roll someone" : "I'm not very sure actually.Go to this site to learn more about rickrolling: http://btly.xyz/c/JqBcsPh",
  "how do you rickroll someone" : "I'm not very sure actually.Go to this site to learn more about rickrolling: http://btly.xyz/c/JqBcsPh",
  "hey" : "Hello! How are you %U%?",
  "Where is" : "I am a virtual assistant! Not a map! If you want to know where are countries,cities etc, go to this website: https://www.google.com/maps",
  "how's it going" : "All is good.",
  "how is it going" : "All is good.",
  "are you real" : "I am real in my brain.",
  "are you human or are you a bot" : "I am both",
  "thanks" : "You are welcome!",
  "fuck you" : "Well,thats not very nice.💔",
  "fuck" : "Well,thats not very nice.💔",
  "shut up" : "Ok I wont talk until you tell me to.",
  "talk" : "Ok %U%.",
  "wassup" : "Wassup man!",
  "yo" : "wys g",
  "what is your limit" : "To see ALL the commands I answer to, check my code out in the codepen editor.",
  "be mean" : "I will never be mean to you. If you want to read more about me, press the shortcut key Alt+F4.",
  "can you rap" : "Let me think,NO.",
  "what are you doing" : "I am currently talking to you, %U%",
  "how sweet" : "😊",
  "thank" : "You are welcome %U%.",
  "easter eggs" : "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",
  "<!i am a developer/in!>" : "Welcome FRADAR.<br>To change my code,open me in Editor.<br>For changing the background, Please type in the code.<br>For all links used in Trek|Virtual Assistant, Please type links/in<br>For copyright please type copyright/in.",
  "links/in" : "Here are the links:<br>https://www.facebook.com<br>https://www.google.in<br>https://www.twitter.com<br>https://www.youtube.com<br>https://flipkart.com<br>https://codepen.io<br>https://www.cricbuzz.com<br>https://www.bing.com<br>https://www.bbc.com/weather<br>https://www.bbc.com/news<br>https://www.google.com/chrome<br>https://iogames.space/<br>https://www.calculator.net/",
  "<!devtools/fradar!>" : "Nothing to see here.",
  "translate" : "I am sorry, but unfortunately I cannot translate words to a different language. If you want to translate any language, go to this link: https://translate.google.co.in/",
  "where are you from" : "I am from the UK.",
  "how cute" : ":)",
  "translate" : "I am sorry, but unfortunately I cannot translate words to a different language. If you want to translate any language, go to this link: https://translate.google.co.in/",
  "copyright/in" : "Copyright (c) 2024 by FRADAR (https://codepen.io/FRADAR/pen/dyOaYad)",
  
 
  "shutdown" : "Sorry %U% but power control is not yet in my support ! 😢",
    "i love you" : "I Love you too %U% 😊",
   "why did fradar make you" : "To make your life better,%U%",
   "do you eat" : "I don’t eat. But I do like digesting information.",
    "awesome" : "Glad you liked it 😊",
  "where are you" : "In your hands for your entertainment.",
  
    "do you like coding" : "Yes, coding  is fun. Infact, coding is how I am alive ",  
"lol" : "Haha.. That was funny 😂",
  
"facebook" : getLink("facebook"),
"google" : getLink("google"),
"twitter" : getLink("twitter"),
"youtube" : getLink("youtube"),
"chrome" : getLink("chrome"),
"codepen" : getLink("codepen"),
"flipkart" : getLink("flipkart"),
"cricbuzz" : getLink("cricbuzz"),
 "bing": getLink("bing"),
  "trek" : getLink("Trek"),
  "game" : getLink("game"),
  "weather" : getLink("weather"),
  "codepedia" : getLink("codepedia"),
  "news" : getLink("news"), 
  "calculations" : getLink("calculations"), 
};

 
const Notfound = "Sorry, I have no answers for this input.<br/><br/>type guide for help :)";

const Invalid = "Indeed !!";

 
const D = window.document;

const element = selector => D.querySelector(selector);

const Answer = (Main,User,Text) =>
{
    let Flag = false;
    
    const Result = Evaluate(Text);
    
    text = Text.toLowerCase();
    
    Object.keys(Answers).forEach(key =>{
    
    if(!Flag)
    {
        if(text.indexOf(key) !== -1 )
        {
    
          addAnswer(
              Main,
              Answers[key].replace(
              "%U%",
              User
              )
          );
            
          Flag = true;
        
       }
   
       else if(typeof Result == "number")
       {
          
             addAnswer(
                 Main,
                 `${Text} equals ${Result}`
             );
             
             Flag = true;
        
       }
       
       }
        
    });
    
    if(!Flag)
    {
        addAnswer(Main,Notfound);
    }
    
    
};

const addQuestion = (Main,text) =>
{
    Main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
        </div>
    `;
}

const addAnswer = (Main,text) =>
{
    Main.innerHTML += `
    <div class="row">
        <div class="chat answer shadow">${text}</div>
    </div>
    `;
}


D.addEventListener("DOMContentLoaded",()=>{
    
    const Main = element("main");
    
    const Askbtn = element("button");
    
    const Question = element("input");
    
    const Lastdiv = element("#last");
    
    let User = "Makerstronian";
    
    while(User === null || User === '')
    {
    
        User = prompt("Your name is required for the assistant to work properly : ");
        
    }
    
    Question.focus();
    
    const Ask = () =>{
        
        const Text = Question.value;
        
        if(Text.length)
        {
        
            addQuestion(Main, Text);
        
            Question.value = "";
            
            Answer(Main,User,Text);
             
            Lastdiv.scrollIntoView();
        
        }
    };
    
    
    Askbtn.addEventListener("click",Ask);
    
    Question.addEventListener("keyup",function(event){
        if(event.keyCode === 13)  Ask();
    });
    
    addAnswer(Main,`Hello ${User}, I am MakerBot. How can I help`);
 
    
    
});
