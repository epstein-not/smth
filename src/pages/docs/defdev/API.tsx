import { ArrowLeft, Code, Zap, Activity, Terminal, ExternalLink, ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevAPI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">API Reference</h1>
            <span className="text-xs text-muted-foreground">/ DEF-DEV Documentation</span>
          </div>
          <Link 
            to="/docs/def-dev" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to DEF-DEV
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl font-bold text-amber-400">API Reference</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Technical documentation for the Action Dispatcher, Command Queue, and System Bus APIs.
          </p>
        </section>

        {/* Action Dispatcher */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center gap-2">
            <Activity className="w-6 h-6 text-purple-400" />
            Action Dispatcher
          </h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
            <p className="text-muted-foreground">
              The Action Dispatcher is the central event bus for UrbanShade OS. It manages action logging, persistence, and subscriber notifications.
            </p>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-foreground">Methods</h4>
              
              <div className="space-y-3">
                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">dispatch(action: Action): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dispatch an action to all subscribers. Automatically adds timestamp and ID.
                  </p>
                  <pre className="text-xs text-muted-foreground mt-2 bg-black/50 p-2 rounded">
{`actionDispatcher.dispatch({
  type: 'SYSTEM',
  action: 'boot_complete',
  details: { version: '2.0' }
});`}
                  </pre>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">subscribe(callback: (action) =&gt; void): () =&gt; void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Subscribe to action events. Returns an unsubscribe function.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">setPersistence(enabled: boolean): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Enable or disable action persistence to localStorage.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">loadFromStorage(): Action[]</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Load persisted actions from localStorage.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">clearStorage(): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Clear all persisted actions from localStorage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Command Queue */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            Command Queue
          </h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
            <p className="text-muted-foreground">
              The Command Queue enables cross-page communication between DEF-DEV and the main OS. Commands are stored in localStorage and polled by the main page.
            </p>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-foreground">Methods</h4>
              
              <div className="space-y-3">
                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">queueCommand(command: QueuedCommand): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add a command to the queue for execution on the main OS page.
                  </p>
                  <pre className="text-xs text-muted-foreground mt-2 bg-black/50 p-2 rounded">
{`commandQueue.queueCommand({
  type: 'crash',
  payload: { crashType: 'KERNEL_PANIC' }
});`}
                  </pre>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">getNextCommand(): QueuedCommand | null</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Get and remove the next pending command from the queue.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">peekQueue(): QueuedCommand[]</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    View all pending commands without removing them.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">clearQueue(): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Clear all pending commands from the queue.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-foreground mb-3">Command Types</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">crash</code>
                  <span className="text-muted-foreground">- Trigger crash screen</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">bugcheck</code>
                  <span className="text-muted-foreground">- Trigger bugcheck</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">reboot</code>
                  <span className="text-muted-foreground">- System reboot</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">shutdown</code>
                  <span className="text-muted-foreground">- System shutdown</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">lockdown</code>
                  <span className="text-muted-foreground">- Facility lockdown</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">recovery</code>
                  <span className="text-muted-foreground">- Recovery mode</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">storage</code>
                  <span className="text-muted-foreground">- Storage operations</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <code className="text-cyan-400">toast</code>
                  <span className="text-muted-foreground">- Show notification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Bus */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            System Bus
          </h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
            <p className="text-muted-foreground">
              The System Bus provides a publish/subscribe mechanism for real-time communication between OS components.
            </p>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-foreground">Methods</h4>
              
              <div className="space-y-3">
                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">emit(event: string, data?: any): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Emit an event to all subscribers.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">on(event: string, callback: (data) =&gt; void): () =&gt; void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Subscribe to an event. Returns an unsubscribe function.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-lg">
                  <code className="text-green-400">once(event: string, callback: (data) =&gt; void): void</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Subscribe to an event once. Automatically unsubscribes after first call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/bugchecks"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Bugchecks
          </Link>
          <Link
            to="/docs/def-dev"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Back to Overview
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevAPI;