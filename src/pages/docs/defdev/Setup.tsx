import { ArrowLeft, Settings, Terminal, Shield, Wrench, AlertTriangle, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevSetup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">DEF-DEV Setup</h1>
            <span className="text-xs text-muted-foreground">/ Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/docs/def-dev" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to DEF-DEV
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}
        <section className="space-y-4">
          <h2 className="text-4xl font-bold text-amber-400">Setting Up DEF-DEV</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Complete guide to enabling Developer Mode and accessing the DEF-DEV console in UrbanShade OS.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Prerequisites</h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-muted-foreground mb-4">
              Before enabling DEF-DEV, ensure you understand the following:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-foreground">DEF-DEV is for development and debugging only</strong>
                  <p className="text-sm text-muted-foreground">It provides low-level access to system internals and should be used responsibly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-foreground">Action logging may use localStorage</strong>
                  <p className="text-sm text-muted-foreground">Persistent action logging stores data in your browser's localStorage.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-foreground">Some features can disrupt normal operation</strong>
                  <p className="text-sm text-muted-foreground">Admin commands like triggering crashes or wipes affect the entire system.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Enabling Developer Mode */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Enabling Developer Mode</h3>
          <p className="text-muted-foreground">
            There are four methods to enable Developer Mode. Choose the one that best fits your situation:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-green-400">Method 1: During Installation</h4>
                  <span className="text-xs text-green-400/70">Recommended for new setups</span>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-500/20 rounded text-center text-xs leading-5 text-green-400 flex-shrink-0">1</span>
                  Start or reset UrbanShade OS installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-500/20 rounded text-center text-xs leading-5 text-green-400 flex-shrink-0">2</span>
                  Navigate to the Configuration step
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-500/20 rounded text-center text-xs leading-5 text-green-400 flex-shrink-0">3</span>
                  Check "Enable Developer Mode" checkbox
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-500/20 rounded text-center text-xs leading-5 text-green-400 flex-shrink-0">4</span>
                  Complete the installation
                </li>
              </ol>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-400">Method 2: Via Settings App</h4>
                  <span className="text-xs text-blue-400/70">For already installed systems</span>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded text-center text-xs leading-5 text-blue-400 flex-shrink-0">1</span>
                  Open the Settings application
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded text-center text-xs leading-5 text-blue-400 flex-shrink-0">2</span>
                  Navigate to "Developer Options"
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded text-center text-xs leading-5 text-blue-400 flex-shrink-0">3</span>
                  Toggle "Enable Developer Mode" ON
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded text-center text-xs leading-5 text-blue-400 flex-shrink-0">4</span>
                  Settings are applied immediately
                </li>
              </ol>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-400">Method 3: Browser Console</h4>
                  <span className="text-xs text-purple-400/70">Quick access for developers</span>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400 flex-shrink-0">1</span>
                  Open browser developer tools (F12)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400 flex-shrink-0">2</span>
                  Switch to the Console tab
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400 flex-shrink-0">3</span>
                  Type <code className="px-1.5 py-0.5 bg-black/50 rounded text-purple-400">devMode()</code> and press Enter
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400 flex-shrink-0">4</span>
                  Developer Mode is now enabled
                </li>
              </ol>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-400">Method 4: Recovery Mode</h4>
                  <span className="text-xs text-orange-400/70">When system is inaccessible</span>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-orange-500/20 rounded text-center text-xs leading-5 text-orange-400 flex-shrink-0">1</span>
                  Reboot or refresh the page
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-orange-500/20 rounded text-center text-xs leading-5 text-orange-400 flex-shrink-0">2</span>
                  Press F2 during BIOS/boot screen
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-orange-500/20 rounded text-center text-xs leading-5 text-orange-400 flex-shrink-0">3</span>
                  Select "Developer Mode" option
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-orange-500/20 rounded text-center text-xs leading-5 text-orange-400 flex-shrink-0">4</span>
                  System will enable dev mode and reboot
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Accessing DEF-DEV */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Accessing the DEF-DEV Console</h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-muted-foreground mb-4">
              Once Developer Mode is enabled, navigate to <code className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400">/def-dev</code> in your browser.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">First-Time Setup</h4>
              <p className="text-sm text-muted-foreground">
                On your first visit to DEF-DEV, you'll see a consent screen. This screen explains what DEF-DEV does and asks for your permission to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  Create a dedicated localStorage key for action logging
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  Monitor system events and user interactions
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  Provide admin-level controls over the system
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Check the consent checkbox and click "Continue" to proceed.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Troubleshooting</h3>
          
          <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5" />
              <div className="space-y-3">
                <h4 className="font-bold text-red-400">Access Denied Error</h4>
                <p className="text-sm text-muted-foreground">
                  If you see <code className="px-1.5 py-0.5 bg-black/50 rounded text-red-400">!COULDN'T BIND TO PAGE!</code> when accessing /def-dev:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    Developer Mode is not enabled
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    Settings haven't been saved properly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    LocalStorage might be blocked or cleared
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Enable Developer Mode using one of the methods above, then try again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
          <Link
            to="/docs/def-dev/console"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: Console Tab
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevSetup;