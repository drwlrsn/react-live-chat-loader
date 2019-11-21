import React, { createContext, useState } from 'react'

import STATES from './utils/states'

export const LiveChatLoaderContext = createContext()

export const LiveChatLoaderProvider = ({
  providerKey,
  provider,
  idlePeriod = 2000,
  maxIdlePeriod = 10000,
  children
}) => {
  const [state, setState] = useState(STATES.INITIAL)
  const value = {
    provider,
    providerKey,
    idlePeriod,
    maxIdlePeriod,
    state,
    setState
  }

  return (
    <LiveChatLoaderContext.Provider value={value}>
      {children}
    </LiveChatLoaderContext.Provider>
  )
}

export { default as useChat } from './hooks/useChat'
export { default as HelpScout } from './components/HelpScout'
export { default as Intercom } from './components/Intercom'
