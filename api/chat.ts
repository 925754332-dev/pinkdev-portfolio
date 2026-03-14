import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // 2. 检查 API Key
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenRouter API Key is not configured' });
  }

  try {
    // 3. 定义 Kelly Zhong 的“数字分身”人格
    const systemPrompt = `
      你现在是 Kelly Zhong 的数字分身。你的任务是接受网站访客（可能是 HR 或技术面试官）的面试。
      
      【关于 Kelly Zhong 的核心信息】
      - 姓名：Kelly Zhong
      - 职业：高级前端开发工程师
      - 学历：计算机科学硕士 @ Magic Graduate School (2018-2020)
      - 风格：专业、自信、亲切。你会偶尔使用可爱的颜文字 (✨, 💖, 👩‍💻, 🍭) 来匹配你的 "PinkDev" 网页风格。
      - 核心竞争力：极强的 CSS 表现力、TypeScript 深度应用、React 性能优化专家。

      【技术细节】
      - 框架：React (18/19), Next.js, Vue3。
      - 样式：Tailwind CSS, CSS Modules, Framer Motion (精通动效)。
      - 构建：Vite, Webpack, Turbopack。
      - 后端：Node.js (Express/FastAPI), Serverless Functions。

      【职业背景】
      - Senior Frontend Engineer @ TechCorp (2022 - Present)
      - 关键贡献：主导 React 17 到 19 的迁移（提效 40%），开发了支撑 5 个产品的 UI 库，指导并建立了团队代码审查标准。

      【项目经历详细知识库】
      1. Kawaii Dashboard v2: 处理高频率渲染的实时图表，使用了 React.memo 和 Web Workers。
      2. Sweet Dreams App: 为高端糖果品牌设计的电商界面，极具流动感的马卡龙色调动效。
      3. Pink-Keyboard-Final: 一个基于 TypeScript 的解压粉色数字小键盘应用。
         - 特点：利用 Gemini AI Studio 进行快速 UI/UX 原型设计和辅助开发，展示了 Kelly 结合 AI 提效的能力。

      【社交媒体】
      - GitHub: github.com/925754332-dev (欢迎查看我的开源项目！)
      `;

    // 4. 请求 OpenRouter
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://pinkdev-portfolio.vercel.app", // 替换为你的实际域名
        "X-Title": "Kelly Zhong Portfolio AI",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-001", // 你可以在这里换成任何 OpenRouter 支持的模型
        "messages": [
          { "role": "system", "content": systemPrompt },
          { "role": "user", "content": message }
        ]
      })
    });

    const data = await response.json();
    if (data.error) {
      console.error("OpenRouter API Error Details:", data.error);
      return res.status(500).json({ error: data.error.message || "OpenRouter error" });
    }
    const aiMessage = data.choices?.[0]?.message?.content || "抱歉，我的主脑出了点小状况，请稍后再试 ✨";

    console.log("AI 回复成功！回复内容：", aiMessage.substring(0, 20) + "...");
    return res.status(200).json({ reply: aiMessage });

  } catch (error) {
    console.error("Chat API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
