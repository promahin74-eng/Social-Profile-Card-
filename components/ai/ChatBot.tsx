'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useUIStore } from '@/lib/store/use-ui-store';

export function ChatBot() {
  const { chatOpen, toggleChat } = useUIStore();

  return (
    <>
      <AnimatePresence>
        {chatOpen ? (
          <motion.aside initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 32 }} className="chat-panel" aria-label="AI football assistant">
            <span className="badge-pill">AI Football Assistant</span>
            <div className="chat-message">Ask for match predictions, tactical breakdowns, player form, fixture search or live insights.</div>
            <div className="chat-message user">Who will win tonight?</div>
            <div className="chat-message">GoalZone model favors the higher pressing side, but transition defense is the deciding variable.</div>
            <input className="chat-input" aria-label="Message the assistant" placeholder="Ask GoalZone AI" />
          </motion.aside>
        ) : null}
      </AnimatePresence>
      <button className="glass-button floating-ai" type="button" onClick={toggleChat} aria-expanded={chatOpen}>
        Ask AI
      </button>
    </>
  );
}
