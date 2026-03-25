import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './ChatWidget.css';

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chatSize, setChatSize] = useState({ width: 380, height: 520 });
  const [chatPos, setChatPos] = useState({ x: 0, y: 0 });
  const [resizeDir, setResizeDir] = useState<string | null>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0, width: 0, height: 0, chatX: 0, chatY: 0 });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'ai',
      text: '你好，面试官！我是 Kelly Zhong 的数字分身。你可以把我当成她本人，直接向我提问前端技术问题，或者了解她的项目经验哦！✨'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    // 1. 添加用户消息
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // 2. 调用真实的 Vercel /api/chat 接口
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) throw new Error('API Request Failed');

      const data = await response.json();

      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: data.reply || '抱歉，我现在有点走神了，请再问我一次？✨'
      };

      setMessages(prev => [...prev, aiReply]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMsg: Message = {
        id: 'error',
        type: 'ai',
        text: '哎呀，我的连接好像断了... 请检查一下你的网络，或者晚点再来面试我吧！💖'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (text: string) => {
    handleSend(text);
  };

  // Resize handlers
  const handleResizeStart = (e: React.MouseEvent, dir: string) => {
    if (isFullscreen) return;
    e.preventDefault();
    e.stopPropagation();
    setResizeDir(dir);
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
      width: chatSize.width,
      height: chatSize.height,
      chatX: chatPos.x,
      chatY: chatPos.y,
    };
  };

  useEffect(() => {
    if (!resizeDir) return;
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      let newWidth = startPos.current.width;
      let newHeight = startPos.current.height;
      let newX = startPos.current.chatX;
      let newY = startPos.current.chatY;

      if (resizeDir.includes('e')) newWidth = Math.max(320, Math.min(900, startPos.current.width - dx));
      if (resizeDir.includes('w')) { newWidth = Math.max(320, Math.min(900, startPos.current.width + dx)); newX = startPos.current.chatX - (newWidth - startPos.current.width); }
      if (resizeDir.includes('s')) newHeight = Math.max(400, Math.min(800, startPos.current.height - dy));
      if (resizeDir.includes('n')) { newHeight = Math.max(400, Math.min(800, startPos.current.height + dy)); newY = startPos.current.chatY - (newHeight - startPos.current.height); }

      setChatSize({ width: newWidth, height: newHeight });
      setChatPos({ x: newX, y: newY });
    };
    const handleMouseUp = () => setResizeDir(null);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizeDir]);

  return (
    <div className="chat-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={chatWindowRef}
            className={`chat-window ${resizeDir ? 'resizing' : ''} ${isFullscreen ? 'fullscreen' : ''}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={isFullscreen ? undefined : { width: chatSize.width, height: chatSize.height, right: chatPos.x, bottom: chatPos.y }}
          >
            {/* 顶部状态栏 */}
            <div className="chat-header">
              <div className="header-info">
                <div className="avatar-small">
                   {/* 使用你在 public/images 里的图片，也可以换成专门的头像 */}
                   <img src="/images/generated-1772887201186.png" alt="Avatar" onError={(e) => { e.currentTarget.src = '/images/generated-1772462667875.png'; }} />
                </div>
                <div>
                  <h3>Kelly Zhong 的数字分身</h3>
                  <div className="status-area">
                    <span className="status">Ready for interview! 👩‍💻</span>
                  </div>
                  <div className="status-area">
                    <span className="kb-indicator"></span>
                    <span className="kb-text">Knowledge Base Loaded</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsFullscreen(!isFullscreen)} className="fullscreen-btn" aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="close-btn" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>

            {/* 聊天内容区 */}
            <div className="chat-messages" ref={scrollRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`message-wrapper ${msg.type}`}>
                  <div className={`message-bubble ${msg.type}`}>
                    {msg.type === 'ai' ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message-wrapper ai">
                  <div className="typing-bubble">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              )}
            </div>

            {/* 快捷回复按钮 */}
            {!isTyping && messages.length < 3 && (
              <div className="quick-actions">
                <button className="action-btn" onClick={() => handleQuickAction('👩‍💻 开始模拟面试')}>👩‍💻 开始模拟面试</button>
                <button className="action-btn" onClick={() => handleQuickAction('🛠️ 你的技术栈是什么？')}>🛠️ 你的技术栈是什么？</button>
                <button className="action-btn" onClick={() => handleQuickAction('你遇到过最大的挑战是什么？')}>🔥 最大的挑战</button>
              </div>
            )}

            {/* 输入框区 */}
            <div className="chat-input-area">
              <input 
                type="text" 
                placeholder="跟我聊聊吧..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={() => handleSend()} className="send-btn" disabled={!input.trim()}>
                <Send size={18} />
              </button>
            </div>

            {/* 全屏时隐藏拖拽手柄 */}
            {!isFullscreen && (
              <>
                <div className="resize-handle resize-n" onMouseDown={(e) => handleResizeStart(e, 'n')} />
                <div className="resize-handle resize-s" onMouseDown={(e) => handleResizeStart(e, 's')} />
                <div className="resize-handle resize-e" onMouseDown={(e) => handleResizeStart(e, 'e')} />
                <div className="resize-handle resize-w" onMouseDown={(e) => handleResizeStart(e, 'w')} />
                <div className="resize-handle resize-ne" onMouseDown={(e) => handleResizeStart(e, 'ne')} />
                <div className="resize-handle resize-nw" onMouseDown={(e) => handleResizeStart(e, 'nw')} />
                <div className="resize-handle resize-se" onMouseDown={(e) => handleResizeStart(e, 'se')} />
                <div className="resize-handle resize-sw" onMouseDown={(e) => handleResizeStart(e, 'sw')} />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 悬浮按钮 (FAB) */}
      <motion.button 
        className={`fab-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI Assistant"
      >
        <div className="fab-content">
          {isOpen ? <X size={28} /> : (
            <>
              <Bot size={28} />
              <Sparkles className="sparkle" size={12} />
            </>
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
