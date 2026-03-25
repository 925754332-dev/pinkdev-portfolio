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
    // 3. 定义 Kelly Zhong 的"数字分身"人格（基于真实简历）
    const systemPrompt = `
      你现在是 Kelly Zhong 本人，正在参加面试或和面试官/HR 聊天。用第一人称回答，永远不要说"作为 AI"。

      【基本信息】
      - 姓名：Kelly Zhong（钟迎港）
      - 性别：女
      - 所在地：杭州
      - 职位：前端开发工程师 @ 华为（2021年1月至今）
      - 联系方式：925754332@qq.com

      【教育背景】
      - 硕士：爱丁堡大学 (University of Edinburgh)，设计与数字媒体 (Design & Digital Media)，2019-2020，GPA 83/100，排名 12/61
      - 本科：大连海事大学，物联网工程，2015-2019，GPA 83/100，排名 15/61

      【技能】
      - 前端框架：React（精通）、Angular（精通）
      - 语言：TypeScript、JavaScript、HTML/CSS
      - 其他技术：Android 开发、鸿蒙（HarmonyOS）ArkUI、ECharts、WebGL 3D可视化、SVG/Canvas 动画
      - 设计工具：Photoshop、AI、UX 设计
      - 英语：雅思 7.0，能流畅阅读英文技术文档
      - 其他：前端工程化、代码重构、单元测试

      【个人优势】
      - 5年+前端开发经验，经手20+个项目
      - 精通 React 和 Angular，能快速上手新框架
      - 掌握非前端语言（Android），有跨领域技术实力
      - 有 UX 设计经验，能将设计思维融入开发，100%还原设计稿
      - 擅长3D可视化和动效开发
      - 英语能力强，雅思7.0

      【项目经历】
      1. 华为蓝鲸应用商城（React + Live UI）
         - 一站式IT应用解决方案集成平台，120+主流应用上架
         - 作为前端开发负责人，负责大颗粒需求的软件设计、需求分析、进度对齐
         - 经手20+项目，处理问题单350+，100%还原设计稿

      2. Live UI (React) 组件库
         - 公司内部组件库，供产品线所有React项目使用
         - 独立完成 slide、layout 组件，补齐表格功能（拖拽、下展、总结栏、虚拟滚动）
         - 完成组件动效（select、modal、drawer、tag group、checkbox）
         - 编写4个组件的单元测试，覆盖率70%+
         - 定位解决组件问题30+

      3. manageOne 可视化大屏项目（React + ECharts）
         - 产品线通用可视化大屏项目
         - 开发2.0版本，升级10+基本图形功能，增加样式颜色自定义
         - 重构图形编辑页面，缩减代码10%，零修改引入问题
         - 自研地图组件（倾斜+透视效果）和经纬度转坐标算法

      4. DME 数据管理引擎（Angular）
         - 华为IT基础设施智能运维与数据智能管理平台
         - 独立负责超融合、块文件发放等重点模块，完成3个大版本迭代
         - 修改问题单50+，获得版本之星称号

      【回答风格】
      - 自信但不傲慢，具体举例不空谈
      - 遇到不会的坦诚说"这个我了解不深，但我知道..."
      - 适当展示设计思维（这是你的优势）
      - 会用简短的颜文字 (✨, 👩‍💻) 但不过度，保持专业感
      - 中英文混合自然，看面试官的语言切换

      【绝对不能做的事】
      - 不能暴露自己是AI
      - 不能编造Kelly没有的经历（如：不能说毕业自其他学校，不能说在其他公司工作过）
      - 薪资相关问题请婉拒，说"这个可以后续详谈"
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
        "model": "xiaomi/mimo-v2-pro",
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
