/* ═══════════════════════════════════════════════════════════════
   ARTICLES DATA — YAHAN NAYE ARTICLES ADD KARO
   ═══════════════════════════════════════════════════════════════
   
   NAYA ARTICLE ADD KARNE KE LIYE:
   1. Neeche ek block copy karo
   2. Comma laga ke list ke aakhir mein paste karo
   3. Har field bharo
   
   FIELDS:
   - id: unique number
   - slug: URL ke liye (chhota, dash wala)
   - title: Article ka title
   - category: Self-Help / Psychology / Money / Motivation / Productivity
   - excerpt: 1-2 line summary (card pe dikhega)
   - cover: Image URL
   - author: Tumhara naam ya "BOOKHUB Team"
   - date: "2026-01-15" format
   - readTime: "5 min read"
   - content: Poora article (HTML allowed — <p>, <h2>, <ul>, <li>, <strong>)
   ═══════════════════════════════════════════════════════════════ */

const ARTICLES = [
  {
    id: "1",
    slug: "10-books-that-will-change-your-life-2026",
    title: "10 Books That Will Change Your Life in 2026",
    category: "Self-Help",
    excerpt: "Ten books that consistently appear on the reading lists of successful people — and why they matter.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-01-15",
    readTime: "8 min read",
    content: `
      <p>Every year, millions of books are published. But only a handful have the power to genuinely change how you think, work and live. After reviewing bestseller lists, reader recommendations and expert curation, we've narrowed it down to ten books that consistently appear on the reading lists of successful people.</p>

      <h2>1. Atomic Habits — James Clear</h2>
      <p>This is the definitive guide to habit formation. Clear explains why tiny 1% improvements compound into remarkable results — and gives you a practical framework to build good habits and break bad ones.</p>
      <p><strong>Key lesson:</strong> Focus on systems, not goals. You do not rise to the level of your goals — you fall to the level of your systems.</p>

      <h2>2. The Psychology of Money — Morgan Housel</h2>
      <p>Housel argues that doing well with money has little to do with how smart you are and a lot to do with how you behave. Through 19 short stories, he explores the emotional and psychological side of money.</p>

      <h2>3. Deep Work — Cal Newport</h2>
      <p>In a world full of distraction, the ability to focus deeply is becoming rare — and increasingly valuable. Newport shows you how to cultivate this skill.</p>

      <h2>4. Rich Dad Poor Dad — Robert Kiyosaki</h2>
      <p>A classic that contrasts two mindsets about money. Kiyosaki teaches that the rich buy assets while the poor and middle class buy liabilities.</p>

      <h2>5. Man's Search for Meaning — Viktor Frankl</h2>
      <p>A psychiatrist's memoir of survival in Nazi concentration camps and his theory that meaning is our primary drive in life.</p>

      <h2>6. The 7 Habits of Highly Effective People — Stephen Covey</h2>
      <p>Seven timeless principles that move you from dependence to independence to interdependence.</p>

      <h2>7. Thinking, Fast and Slow — Daniel Kahneman</h2>
      <p>A Nobel laureate explains the two systems that drive the way we think — and how they shape our decisions.</p>

      <h2>8. The Alchemist — Paulo Coelho</h2>
      <p>A fable about following your dreams. Santiago's journey teaches us that when you want something, the universe conspires to help you achieve it.</p>

      <h2>9. Zero to One — Peter Thiel</h2>
      <p>Notes on startups, innovation and how to build the future by creating something entirely new.</p>

      <h2>10. The Subtle Art of Not Giving a F*** — Mark Manson</h2>
      <p>A counterintuitive approach to living a good life. Manson argues that we should only care about what truly matters.</p>

      <h2>Final Thoughts</h2>
      <p>You don't need to read all ten at once. Pick one, read it slowly, apply one lesson at a time. Reading without action changes nothing. Reading with action changes everything.</p>

      <p>Explore our full book collection on the <a href="index.html#books">BOOKHUB store</a>.</p>
    `
  },
  {
    id: "2",
    slug: "atomic-habits-summary-7-key-lessons",
    title: "Atomic Habits Summary — 7 Key Lessons",
    category: "Self-Help",
    excerpt: "The seven most powerful lessons from James Clear's Atomic Habits, summarized for busy readers.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-01-18",
    readTime: "6 min read",
    content: `
      <p>Atomic Habits by James Clear has sold over 20 million copies worldwide. Why? Because it gives a clear, practical system for building good habits and breaking bad ones.</p>

      <h2>1. Small Changes Compound</h2>
      <p>A 1% improvement every day doesn't feel like much. But over a year, it makes you 37 times better. Small habits compound into remarkable results.</p>

      <h2>2. Focus on Systems, Not Goals</h2>
      <p>Goals give you direction. Systems give you progress. Winners and losers have the same goals — what separates them is their systems.</p>

      <h2>3. Identity-Based Habits</h2>
      <p>Instead of saying "I want to run a marathon," say "I am a runner." Identity-based habits are more lasting because they become part of who you are.</p>

      <h2>4. The Four Laws of Behavior Change</h2>
      <ul>
        <li><strong>Make it obvious</strong> — design your environment</li>
        <li><strong>Make it attractive</strong> — pair with something you enjoy</li>
        <li><strong>Make it easy</strong> — reduce friction</li>
        <li><strong>Make it satisfying</strong> — reward yourself</li>
      </ul>

      <h2>5. Habit Stacking</h2>
      <p>Attach a new habit to an existing one. "After I pour my morning coffee, I will meditate for one minute."</p>

      <h2>6. The Two-Minute Rule</h2>
      <p>Start any new habit in under two minutes. "Read one page." "Do one push-up." Starting is more important than intensity.</p>

      <h2>7. Environment Beats Willpower</h2>
      <p>You don't need more willpower — you need a better environment. Make good habits obvious and bad habits invisible.</p>

      <h2>Final Thoughts</h2>
      <p>Atomic Habits is not about doing more. It's about doing the right things, consistently, until they become automatic.</p>
    `
  },
  {
    id: "3",
    slug: "how-to-build-a-reading-habit-in-30-days",
    title: "How to Build a Reading Habit in 30 Days",
    category: "Productivity",
    excerpt: "A practical 30-day plan to build a reading habit that actually sticks.",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-01-20",
    readTime: "5 min read",
    content: `
      <p>Reading is one of the highest-leverage habits you can build. But most people fail because they try to do too much too soon. Here's a realistic 30-day plan.</p>

      <h2>Week 1: Start Small</h2>
      <p>Read just <strong>10 pages a day</strong>. That's it. The goal is consistency, not quantity.</p>

      <h2>Week 2: Set a Fixed Time</h2>
      <p>Choose a specific time — like 30 minutes before bed, or right after morning coffee. Habits stick when they have a fixed time and place.</p>

      <h2>Week 3: Choose Books You Enjoy</h2>
      <p>Don't force yourself to read "important" books if you're not enjoying them. Read what keeps you turning pages.</p>

      <h2>Week 4: Increase Gradually</h2>
      <p>Now go to 20 pages a day. You've built the habit — now you can scale it.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li>Starting with a book that's too hard</li>
        <li>Reading at random times</li>
        <li>Trying to read 100 pages on day 1</li>
        <li>Not keeping the book visible</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>Reading is not about speed. It's about consistency. 10 pages a day = 3650 pages a year = about 12 books. That's a habit worth building.</p>
    `
  },
  {
    id: "4",
    slug: "best-books-on-money-for-beginners",
    title: "Best Books on Money for Beginners",
    category: "Money",
    excerpt: "Five books that teach you personal finance, investing and wealth building from scratch.",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-01-22",
    readTime: "6 min read",
    content: `
      <p>Most people never learn about money in school. Here are five books that fill that gap — perfect for beginners.</p>

      <h2>1. Rich Dad Poor Dad — Robert Kiyosaki</h2>
      <p>Teaches you the difference between assets and liabilities — and why the rich keep getting richer.</p>

      <h2>2. The Psychology of Money — Morgan Housel</h2>
      <p>Shows that smart money decisions are more about behavior than math.</p>

      <h2>3. The Total Money Makeover — Dave Ramsey</h2>
      <p>A step-by-step plan to get out of debt and build wealth, one baby step at a time.</p>

      <h2>4. I Will Teach You to Be Rich — Ramit Sethi</h2>
      <p>A practical, no-nonsense guide to automating your finances and investing for the long term.</p>

      <h2>5. The Millionaire Next Door — Thomas Stanley</h2>
      <p>Research-based insights into how real millionaires actually live and spend.</p>

      <h2>Final Thoughts</h2>
      <p>You don't need to be rich to start learning about money. You just need to start. Pick one book, apply one lesson.</p>
    `
  },
  {
    id: "5",
    slug: "5-psychology-books-that-explain-human-behavior",
    title: "5 Psychology Books That Explain Human Behavior",
    category: "Psychology",
    excerpt: "Five accessible psychology books that help you understand why people do what they do.",
    cover: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-01-24",
    readTime: "5 min read",
    content: `
      <p>Understanding human behavior is one of the most valuable skills you can develop. These five books make it accessible.</p>

      <h2>1. Thinking, Fast and Slow — Daniel Kahneman</h2>
      <p>Explains the two systems that drive our thinking — fast intuition and slow reasoning.</p>

      <h2>2. Influence — Robert Cialdini</h2>
      <p>The classic book on persuasion. Learn the six principles that make people say yes.</p>

      <h2>3. Read People Like a Book — Patrick King</h2>
      <p>A practical guide to reading body language, emotions and hidden intentions.</p>

      <h2>4. The 48 Laws of Power — Robert Greene</h2>
      <p>A controversial but fascinating look at power dynamics across history.</p>

      <h2>5. Predictably Irrational — Dan Ariely</h2>
      <p>Shows how we consistently make irrational decisions — and why.</p>

      <h2>Final Thoughts</h2>
      <p>Psychology is not just for psychologists. It's for anyone who wants to understand themselves and others better.</p>
    `
  },
 {
  id: "6",
  slug: "rich-dad-poor-dad-summary-lessons",
  title: "Rich Dad Poor Dad — Summary & 7 Key Lessons",
  category: "Money",
  excerpt: "The complete summary of Robert Kiyosaki's Rich Dad Poor Dad, with 7 lessons that change how you think about money.",
  cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  author: "BOOKHUB Team",
  date: "2026-01-26",
  readTime: "7 min read",
  content: `
    <p>Rich Dad Poor Dad by Robert Kiyosaki has sold over 40 million copies worldwide. It is one of the most influential personal finance books ever written — and for good reason.</p>

    <h2>The Two Dads</h2>
    <p>Kiyosaki grew up with two father figures. His biological father (Poor Dad) was highly educated but struggled financially. His best friend's father (Rich Dad) had little formal education but became one of the richest men in Hawaii.</p>
    <p>The book contrasts their two mindsets about money, work and life.</p>

    <h2>Lesson 1: The Rich Don't Work for Money</h2>
    <p>Poor and middle-class people work for money. Rich people make money work for them.</p>

    <h2>Lesson 2: Why Financial Literacy Matters</h2>
    <p>Kiyosaki argues that financial education is more important than a high salary. Without it, even high earners stay broke.</p>

    <h2>Lesson 3: Mind Your Own Business</h2>
    <p>Build your asset column. Buy income-generating assets — not liabilities disguised as assets.</p>

    <h2>Lesson 4: The History of Taxes</h2>
    <p>The rich understand how taxes and corporations work. The middle class pays the most taxes.</p>

    <h2>Lesson 5: The Rich Invent Money</h2>
    <p>Opportunities are everywhere. The rich train themselves to spot them.</p>

    <h2>Lesson 6: Work to Learn — Not to Earn</h2>
    <p>Choose jobs for the skills they teach you, not just the salary.</p>

    <h2>Lesson 7: Overcoming Obstacles</h2>
    <p>Fear, cynicism, laziness, bad habits and arrogance hold most people back.</p>

    <h2>Final Thoughts</h2>
    <p>Rich Dad Poor Dad is not a step-by-step investing guide. It is a mindset shift — a new way of thinking about money, work and life.</p>

    <p>Explore our full book collection on the <a href="index.html#books">BOOKHUB store</a>.</p>
  `
},
{
  id: "7",
  slug: "how-to-read-50-books-a-year",
  title: "How to Read 50 Books a Year (Realistic Plan)",
  category: "Productivity",
  excerpt: "A realistic and practical system to read 50 books a year — even with a busy schedule.",
  cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  author: "BOOKHUB Team",
  date: "2026-01-28",
  readTime: "5 min read",
  content: `
    <p>Fifty books a year sounds impossible. That is about one book per week. But with the right system, it is completely realistic — even if you work full-time.</p>

    <h2>The Math</h2>
    <p>An average book is 250 pages. Fifty books = 12,500 pages a year. That is about 34 pages a day. If you read 50 pages a day, you finish 50+ books a year easily.</p>

    <h2>Rule 1: Read Multiple Books at Once</h2>
    <p>Have 3-4 books going at the same time — one for morning, one for commute, one for evening. Match the book to your mood.</p>

    <h2>Rule 2: Use Audiobooks</h2>
    <p>Audiobooks count. Listen while driving, walking, cooking or at the gym. You can add 10-15 books a year just from audiobooks.</p>

    <h2>Rule 3: Read Before Bed</h2>
    <p>Replace 30 minutes of phone scrolling with 30 minutes of reading. That alone adds 15-20 books a year.</p>

    <h2>Rule 4: Quit Books You Don't Enjoy</h2>
    <p>Life is too short for bad books. If a book hasn't grabbed you by page 50, move on.</p>

    <h2>Rule 5: Keep a Reading List</h2>
    <p>Always have 5-10 books queued up. Never waste time deciding what to read next.</p>

    <h2>Rule 6: Read Shorter Books</h2>
    <p>Not every book needs to be 500 pages. Mix short books with long ones.</p>

    <h2>Rule 7: Track Your Progress</h2>
    <p>Use Goodreads or a simple notebook. Tracking keeps you motivated.</p>

    <h2>Final Thoughts</h2>
    <p>Reading 50 books a year is not about speed. It is about consistency. 30 minutes a day = 15-20 books a year. Add audiobooks and weekends — you hit 50 easily.</p>
  `
},
 {
    id: "8",
    slug: "the-7-habits-of-highly-effective-people-summary",
    title: "The 7 Habits of Highly Effective People — Summary",
    category: "Self-Help",
    excerpt: "A complete summary of Stephen Covey's classic book on personal and professional effectiveness.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    author: "BOOKHUB Team",
    date: "2026-02-01",
    readTime: "6 min read",
    content: `
      <p>Stephen Covey's "The 7 Habits of Highly Effective People" has sold over 40 million copies. It is a principle-centered approach to solving personal and professional problems.</p>

      <h2>Habit 1: Be Proactive</h2>
      <p>Take responsibility for your life. Do not blame circumstances or conditions for your behavior. You have the freedom to choose your response.</p>

      <h2>Habit 2: Begin with the End in Mind</h2>
      <p>Define your vision and goals clearly. Imagine your own funeral and what you want people to say about you — then live your life backwards from that vision.</p>

      <h2>Habit 3: Put First Things First</h2>
      <p>Prioritize what is truly important, not just what is urgent. Focus on high-impact activities that align with your long-term vision.</p>

      <h2>Habit 4: Think Win-Win</h2>
      <p>Seek mutually beneficial solutions in all interactions. Life is not a zero-sum game — everyone can win.</p>

      <h2>Habit 5: Seek First to Understand, Then to Be Understood</h2>
      <p>Listen empathetically before trying to make your own point. Most people listen with the intent to reply, not to understand.</p>

      <h2>Habit 6: Synergize</h2>
      <p>Collaborate creatively with others. The whole is greater than the sum of its parts when people work together effectively.</p>

      <h2>Habit 7: Sharpen the Saw</h2>
      <p>Continuously renew yourself in four dimensions: physical, social/emotional, mental, and spiritual. Self-renewal is essential for long-term effectiveness.</p>

      <h2>Final Thoughts</h2>
      <p>These habits move you from dependence to independence, and finally to interdependence. Master them to become truly effective in life and work.</p>
    `
},
{
  id: "9",
  slug: "the-psychology-of-money-summary",
  title: "The Psychology of Money — Summary & Key Lessons",
  category: "Money",
  excerpt: "Timeless lessons on wealth, greed, and happiness. Discover why doing well with money has little to do with how smart you are.",
  cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  author: "BOOKHUB Team",
  date: "2026-02-05",
  readTime: "6 min read",
  content: `
    <p>In "The Psychology of Money," Morgan Housel argues that doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.</p>

    <h2>1. No One is Crazy</h2>
    <p>People's views on money are heavily influenced by their personal experiences and the generation they grew up in. What seems crazy to you might make perfect sense to someone else based on their financial history.</p>

    <h2>2. Luck & Risk Are Siblings</h2>
    <p>Nothing is as good or as bad as it seems. Every outcome in life is guided by forces other than individual effort. Be careful when judging financial success or failure.</p>

    <h2>3. Never Enough</h2>
    <p>The hardest financial skill is getting the goalpost to stop moving. If expectations rise with results, there is no logic in striving for more because you'll feel the same after putting in the effort.</p>

    <h2>4. Confounding Compounding</h2>
    <p>Warren Buffett's fortune is a result of time, not just high returns. If he had started investing at 30 and retired at 60, his net worth would be vastly smaller. Compounding is magic.</p>

    <h2>5. Getting Wealthy vs. Staying Wealthy</h2>
    <p>Getting money requires taking risks and being optimistic. Keeping money requires the exact opposite: humility and fear that what you've made can be taken away just as fast.</p>

    <h2>Final Thoughts</h2>
    <p>Wealth is just what you don't see. It's the cars not purchased, the watches not bought. Building wealth requires patience, a long-term mindset, and emotional control over your spending habits.</p>
  `
},
{
  id: "10",
  slug: "how-to-stop-procrastinating",
  title: "How to Stop Procrastinating and Get Things Done",
  category: "Productivity",
  excerpt: "Procrastination is not a time management problem; it's an emotional regulation problem. Here is how to beat it.",
  cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  author: "BOOKHUB Team",
  date: "2026-02-10",
  readTime: "5 min read",
  content: `
    <p>We all procrastinate. But why do we do it? Most people think it's because they are lazy or bad at managing their time. Science says otherwise.</p>
    <p>Procrastination is actually an emotional coping mechanism. We avoid tasks because they make us feel anxious, bored, or overwhelmed.</p>

    <h2>1. The 2-Minute Rule</h2>
    <p>If a task takes less than two minutes to complete, do it immediately. This simple rule prevents small tasks from piling up and becoming overwhelming.</p>

    <h2>2. Break It Down</h2>
    <p>We procrastinate because the task feels too big. Instead of saying "I need to write a book," say "I need to write 200 words." Make the first step so easy you can't say no.</p>

    <h2>3. Forgive Yourself</h2>
    <p>Research shows that students who forgave themselves for procrastinating on the first exam procrastinated less on the next one. Self-compassion reduces the guilt that fuels the procrastination cycle.</p>

    <h2>4. Remove Distractions</h2>
    <p>Willpower is a limited resource. Don't rely on it. Put your phone in another room, close unnecessary browser tabs, and create an environment that makes focus the only option.</p>

    <h2>Final Thoughts</h2>
    <p>Action creates motivation, not the other way around. Stop waiting to "feel like it." Just start small, and the momentum will carry you forward.</p>
  `
},
{
  id: "11",
  slug: "why-you-should-read-every-day",
  title: "5 Life-Changing Benefits of Reading Every Day",
  category: "Self-Help",
  excerpt: "Reading is to the mind what exercise is to the body. Discover how just 20 minutes a day can transform your life.",
  cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
  author: "BOOKHUB Team",
  date: "2026-02-15",
  readTime: "5 min read",
  content: `
    <p>In a world dominated by short-form videos and endless scrolling, the ability to sit down and read a book is becoming a superpower. Here are five reasons why you should build a daily reading habit.</p>

    <h2>1. Stress Reduction</h2>
    <p>Reading can reduce stress levels by up to 68%. A good novel can transport you to another world, allowing you to escape the anxieties of daily life.</p>

    <h2>2. Mental Stimulation</h2>
    <p>Just like muscles, your brain needs exercise to stay healthy. Reading keeps your brain active and engaged, which can help prevent cognitive decline as you age.</p>

    <h2>3. Improved Empathy</h2>
    <p>Studies show that people who read literary fiction have a better ability to understand the feelings and thoughts of others. Books allow you to walk in someone else's shoes.</p>

    <h2>4. Better Vocabulary</h2>
    <p>The more you read, the more words you gain exposure to. This inevitably makes its way into your everyday vocabulary, making you a more effective communicator.</p>

    <h2>5. It's a Form of Investment</h2>
    <p>For the price of a cup of coffee, you can download a book that contains 10 years of someone else's research, failures, and successes. It's the highest return on investment you can make.</p>

    <h2>Final Thoughts</h2>
    <p>You don't need to read 100 books a year. Start with just 10 pages a day. That's 3,650 pages a year—about 12 books. Your future self will thank you.</p>
  `
}
]; 
