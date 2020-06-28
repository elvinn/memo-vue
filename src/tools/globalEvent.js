// 支持跨 tab 的全局事件系统

const STORAGE_KEY = 'global_event';

const COMMAND_MAP = {
  REFRESH: 'refresh',
}

const EVENT_LISTENERS = {};

(function init() {
  Object.values(COMMAND_MAP).forEach((command) => EVENT_LISTENERS[command] = [])

  window.addEventListener('storage', ({ key, newValue }) => {
    if (key !== STORAGE_KEY) {
      return
    }

    const data = JSON.parse(newValue)

    EVENT_LISTENERS[data.command].forEach((listeners) => listeners(data))
  })
}())

function listenRefreshAll(callback = () => location.reload()) {
  EVENT_LISTENERS[COMMAND_MAP.REFRESH].push(callback)
}

function refreshAll() {
  localStorage.setItem('global_event', JSON.stringify({
    command: COMMAND_MAP.REFRESH,
    ts: Date.now(),
  }))
}

export {
  refreshAll,
  listenRefreshAll,
}