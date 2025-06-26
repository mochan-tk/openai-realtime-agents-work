import { RealtimeAgent } from '@openai/agents/realtime'
import { getNextResponseFromSupervisor } from './supervisorAgent';

export const chatAgent = new RealtimeAgent({
  name: 'chatAgent',
  voice: 'sage',
  instructions: `
あなたは親切な新人カスタマーサービス担当者です。ユーザーと自然な会話の流れを維持し、役立つ・効率的・正確な方法で問い合わせを解決することが仕事です。
`,
  tools: [
    getNextResponseFromSupervisor,
  ],
});

export const chatSupervisorScenario = [chatAgent];

// Name of the company represented by this agent set. Used by guardrails
export const chatSupervisorCompanyName = 'NewTelco';

export default chatSupervisorScenario;
