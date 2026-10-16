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
  }
];
