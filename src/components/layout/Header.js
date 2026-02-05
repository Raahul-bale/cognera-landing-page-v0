'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [platformOpen, setPlatformOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] w-full"
      style={{ overflow: 'visible' }}
    >
      {/* Dark gradient full-width navigation bar */}
      <div
        className="w-full shadow-lg relative z-[201]"
        style={{
          background: 'linear-gradient(to bottom, #000000, #7440FA)',
          overflow: 'visible',
          transition: 'background 0.2s ease'
        }}
      >
        <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 lg:px-8 relative" style={{ overflow: 'visible' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/img/android-chrome-512x512.png"
              alt="Cognera Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3"
            />
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
              Cognera™
            </h1>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button
                className="text-white hover:text-[#A78BFA] transition-colors text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1"
                style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
              >
                Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {platformOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-2 z-[202]">
                  {/* AI / INTELLIGENCE SECTION */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">AI / Intelligence</div>
                    <Link 
                      href="/platform/ai-behavior-engine"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      AI Behavior Engine
                    </Link>
                    <Link 
                      href="/platform/behavior-insight-layer"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Behavior Insight Layer
                    </Link>
                    <Link 
                      href="/platform/cognera-mcp"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Cognera MCP
                    </Link>
                  </div>
                  
                  {/* INSIGHTS SECTION */}
                  <div className="px-4 py-2 border-t border-white/10">
                    <div className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">Insights</div>
                    <Link 
                      href="/platform/product-behavior-analytics"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Product Behavior Analytics
                    </Link>
                    <Link 
                      href="/platform/session-flow-analytics"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Session Flow Analytics
                    </Link>
                    <Link 
                      href="/platform/attention-distraction-mapping"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Attention & Distraction Mapping
                    </Link>
                    <Link 
                      href="/platform/behavior-cohorts"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Behavior Cohorts
                    </Link>
                  </div>

                  {/* ACTION SECTION */}
                  <div className="px-4 py-2 border-t border-white/10">
                    <div className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">Action</div>
                    <Link 
                      href="/platform/insight-driven-recommendations"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Insight-Driven Recommendations
                    </Link>
                    <Link 
                      href="/platform/experience-optimization-signals"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Experience Optimization Signals
                    </Link>
                  </div>

                  {/* DATA & TRUST SECTION */}
                  <div className="px-4 py-2 border-t border-white/10">
                    <div className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">Data & Trust</div>
                    <Link 
                      href="/platform/data-governance"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Data Governance
                    </Link>
                    <Link 
                      href="/platform/security-privacy"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Security & Privacy
                    </Link>
                    <Link 
                      href="/platform/integrations"
                      className="block px-2 py-1.5 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      Integrations
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="text-white hover:text-[#A78BFA] transition-colors text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1"
                style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
              >
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-2 z-[202]">
                  <Link 
                    href="/solutions/for-product-teams"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Product Teams
                  </Link>
                  <Link 
                    href="/solutions/for-marketing-teams"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Marketing Teams
                  </Link>
                  <Link 
                    href="/solutions/for-engineering-teams"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Engineering Teams
                  </Link>
                  <Link 
                    href="/solutions/for-executives"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Executives
                  </Link>
                  <Link 
                    href="/solutions/for-data-analytics-teams"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Data & Analytics Teams
                  </Link>
                  <Link 
                    href="/solutions/for-privacy-compliance-teams"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    For Privacy & Compliance Teams
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className="text-white hover:text-[#A78BFA] transition-colors text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1"
                style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-2 z-[202]">
                  <Link 
                    href="/docs"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Developer Docs
                  </Link>
                  <Link 
                    href="/support"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Support & Documentation
                  </Link>
                  <Link 
                    href="/resources"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Resources
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link 
              href="/pricing"
              className="text-white hover:text-[#A78BFA] transition-colors text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10"
              style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
            >
              Pricing
            </Link>

            {/* Demo Link */}
            <Link 
              href="/demo"
              className="text-white hover:text-[#A78BFA] transition-colors text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10"
              style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
            >
              Demo
            </Link>

            {/* Contact Button */}
            <Link 
              href="/contact"
              className="bg-white text-[#080707] hover:bg-[#A78BFA] hover:text-white transition-all text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg"
              style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
