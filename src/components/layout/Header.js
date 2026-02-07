'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [platformOpen, setPlatformOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] w-full"
      style={{ overflow: 'visible' }}
    >
      {/* Light navigation bar */}
      <div
        className="w-full shadow-lg relative z-[201] bg-white/80 backdrop-blur-md border-b border-white/20"
        style={{
          overflow: 'visible',
          transition: 'background 0.2s ease'
        }}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 relative" style={{ overflow: 'visible', backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '65px' }}>
          {/* Logo - Mobile */}
          <Link href="/" className="lg:hidden flex items-center hover:opacity-80 transition-opacity z-[203]">
            <img
              src="/img/Cognera_log_bg_removed.png"
              alt="Cognera Logo"
              className="w-[60px] h-[55px]"
              style={{ marginRight: '5px' }}
            />
            <h1 className="text-lg sm:text-xl lg:text-xl text-black font-semibold" style={{ fontFamily: '"Segoe UI", sans-serif', color: 'rgba(10, 10, 10, 1)', width: '100px', letterSpacing: 'normal', fontWeight: '700', fontSize: '25px', lineHeight: '1.2' }}>
              Cognera
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black p-1.5 rounded-lg hover:bg-white/10 transition-colors z-[203]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Menu - Center */}
          <nav className="hidden lg:flex items-center gap-2 sm:gap-3 lg:gap-4 absolute left-1/2 transform -translate-x-1/2 h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-[203] mr-[160px] h-full">
              <img
                src="/img/Cognera_log_bg_removed.png"
                alt="Cognera Logo"
                className="w-[60px] h-[55px] object-contain"
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              <h1 className="text-lg sm:text-xl lg:text-xl text-black font-semibold" style={{ fontFamily: '"Segoe UI", sans-serif', color: 'rgba(10, 10, 10, 1)', width: '100px', letterSpacing: 'normal', fontWeight: '700', fontSize: '25px', lineHeight: '1', margin: 0, display: 'flex', alignItems: 'center' }}>
                Cognera
              </h1>
            </Link>

            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button
                className="text-black hover:text-[#7440FA] transition-all text-sm font-medium px-2 sm:px-3 py-1.5 flex items-center gap-1 relative border-b-2 border-transparent hover:border-[#A78BFA]"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 500, lineHeight: '1' }}
              >
                Platform
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {platformOpen && (
                <div className="fixed bg-white border-t border-l-0 border-r-0 border-b border-gray-200 shadow-2xl py-8 z-[202]" style={{ top: '65px', left: 0, right: 0, width: '100vw', maxWidth: '100%', borderRadius: '0 0 8px 8px', margin: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '10px', transform: 'none', boxSizing: 'border-box' }} onMouseEnter={() => setPlatformOpen(true)} onMouseLeave={() => setPlatformOpen(false)}>
                  <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-4 gap-8">
                    {/* AI / INTELLIGENCE Column */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                        AI / INTELLIGENCE
                      </h3>
                      <div className="space-y-4">
                        <Link 
                          href="/platform/ai-behavior-engine"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">AI Behavior Engine</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Advanced AI-powered behavior analysis</div>
                        </Link>
                        <Link 
                          href="/platform/behavior-insight-layer"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Behavior Insight Layer</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Deep insights into user behavior patterns</div>
                        </Link>
                        <Link 
                          href="/platform/cognera-mcp"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Cognera MCP</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Model Context Protocol integration</div>
                        </Link>
                      </div>
                    </div>

                    {/* INSIGHTS Column */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                        INSIGHTS
                      </h3>
                      <div className="space-y-4">
                        <Link 
                          href="/platform/product-behavior-analytics"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Product Behavior Analytics</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Comprehensive product usage analytics</div>
                        </Link>
                        <Link 
                          href="/platform/session-flow-analytics"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Session Flow Analytics</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Track and analyze user session flows</div>
                        </Link>
                        <Link 
                          href="/platform/attention-distraction-mapping"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Attention & Distraction Mapping</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Map user attention and distractions</div>
                        </Link>
                        <Link 
                          href="/platform/behavior-cohorts"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Behavior Cohorts</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Segment users by behavior patterns</div>
                        </Link>
                      </div>
                    </div>

                    {/* ACTION Column */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                        ACTION
                      </h3>
                      <div className="space-y-4">
                        <Link 
                          href="/platform/insight-driven-recommendations"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Insight-Driven Recommendations</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">AI-powered recommendations from insights</div>
                        </Link>
                        <Link 
                          href="/platform/experience-optimization-signals"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Experience Optimization Signals</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Signals to optimize user experience</div>
                        </Link>
                      </div>
                    </div>

                    {/* DATA & TRUST Column */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                        DATA & TRUST
                      </h3>
                      <div className="space-y-4">
                        <Link 
                          href="/platform/data-governance"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Data Governance</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Comprehensive data governance tools</div>
                        </Link>
                        <Link 
                          href="/platform/security-privacy"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Security & Privacy</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Enterprise-grade security and privacy</div>
                        </Link>
                        <Link 
                          href="/platform/integrations"
                          className="block group"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Integrations</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Connect with your existing tools</div>
                        </Link>
                      </div>
                    </div>
                  </div>
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
                className="text-black hover:text-[#7440FA] transition-all text-sm font-medium px-2 sm:px-3 py-1.5 flex items-center gap-1 relative border-b-2 border-transparent hover:border-[#A78BFA]"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 500, lineHeight: '1' }}
              >
                Solutions
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="fixed bg-white border-t border-l-0 border-r-0 border-b border-gray-200 shadow-2xl py-6 z-[202]" style={{ top: '65px', left: 0, right: 0, width: '100vw', maxWidth: '100%', borderRadius: '0 0 8px 8px', margin: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '10px', transform: 'none', boxSizing: 'border-box' }} onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                  <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column - 4 items */}
                      <div className="space-y-3">
                        <Link 
                          href="/solutions/for-product-teams"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Product Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Solutions for product development teams</div>
                        </Link>
                        <Link 
                          href="/solutions/for-marketing-teams"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Marketing Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Marketing analytics and insights</div>
                        </Link>
                        <Link 
                          href="/solutions/for-engineering-teams"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Engineering Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Tools for engineering workflows</div>
                        </Link>
                        <Link 
                          href="/solutions/for-executives"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Executives</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Executive dashboards and reports</div>
                        </Link>
                      </div>
                      
                      {/* Right Column - 2 items */}
                      <div className="space-y-3">
                        <Link 
                          href="/solutions/for-data-analytics-teams"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Data & Analytics Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Advanced analytics capabilities</div>
                        </Link>
                        <Link 
                          href="/solutions/for-privacy-compliance-teams"
                          className="block group py-2"
                          style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Privacy & Compliance Teams</div>
                          </div>
                          <div className="text-xs text-gray-600 ml-7">Privacy and compliance solutions</div>
                        </Link>
                      </div>
                    </div>
                  </div>
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
                className="text-black hover:text-[#7440FA] transition-all text-sm font-medium px-2 sm:px-3 py-1.5 flex items-center gap-1 relative border-b-2 border-transparent hover:border-[#A78BFA]"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 500, lineHeight: '1' }}
              >
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="fixed bg-white border-t border-l-0 border-r-0 border-b border-gray-200 shadow-2xl py-6 z-[202]" style={{ top: '65px', left: 0, right: 0, width: '100vw', maxWidth: '100%', borderRadius: '0 0 8px 8px', margin: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '10px', transform: 'none', boxSizing: 'border-box' }} onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
                  <div className="max-w-[1400px] mx-auto px-6">
                    <div className="space-y-3">
                    <Link 
                      href="/docs"
                      className="block group py-2"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Developer Docs</div>
                      </div>
                      <div className="text-xs text-gray-600 ml-7">Complete API and integration documentation</div>
                    </Link>
                    <Link 
                      href="/support"
                      className="block group py-2"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Support & Documentation</div>
                      </div>
                      <div className="text-xs text-gray-600 ml-7">Get help and access support resources</div>
                    </Link>
                    <Link 
                      href="/resources"
                      className="block group py-2"
                      style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#7440FA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div className="font-semibold text-black text-sm group-hover:text-[#7440FA] transition-colors">Resources</div>
                      </div>
                      <div className="text-xs text-gray-600 ml-7">Guides, tutorials, and best practices</div>
                    </Link>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link 
              href="/pricing"
              className="text-black hover:text-[#7440FA] transition-colors text-sm font-medium px-2 sm:px-3 py-1.5 flex items-center"
              style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 500, lineHeight: '1' }}
            >
              Pricing
            </Link>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4 ml-[180px] h-full">
              {/* Divider */}
              <span className="text-gray-400">|</span>
              
              {/* Login Link */}
              <Link 
                href="/login"
                className="text-gray-700 hover:text-[#7440FA] transition-colors text-sm font-medium flex items-center gap-1.5 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 500, lineHeight: '1' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Log In
              </Link>

              {/* Contact Sales Button */}
              <Link 
                href="/contact-sales"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-1.5 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 600, lineHeight: '1' }}
              >
                Contact Sales
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Get Started Free Button */}
              <Link 
                href="/get-started"
                className="bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-1.5 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins), "Poppins", sans-serif', fontWeight: 600, lineHeight: '1' }}
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-t border-white/10 shadow-xl z-[202] max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="px-4 py-4 space-y-2">
                {/* Platform Dropdown Mobile */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setPlatformOpen(!platformOpen)}
                    className="w-full flex items-center justify-between text-white hover:text-[#A78BFA] transition-colors text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Platform
                  </button>
                  {platformOpen && (
                    <div className="mt-2 pl-4 space-y-1">
                      <div className="mb-3">
                        <h3 className="text-xs font-semibold text-[#A78BFA] uppercase mb-2" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                          AI / INTELLIGENCE
                        </h3>
                        <Link href="/platform/ai-behavior-engine" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>AI Behavior Engine</Link>
                        <Link href="/platform/behavior-insight-layer" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Behavior Insight Layer</Link>
                        <Link href="/platform/cognera-mcp" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Cognera MCP</Link>
                      </div>
                      <div className="mb-3">
                        <h3 className="text-xs font-semibold text-[#A78BFA] uppercase mb-2" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                          INSIGHTS
                        </h3>
                        <Link href="/platform/product-behavior-analytics" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Product Behavior Analytics</Link>
                        <Link href="/platform/session-flow-analytics" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Session Flow Analytics</Link>
                        <Link href="/platform/attention-distraction-mapping" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Attention & Distraction Mapping</Link>
                        <Link href="/platform/behavior-cohorts" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Behavior Cohorts</Link>
                      </div>
                      <div className="mb-3">
                        <h3 className="text-xs font-semibold text-[#A78BFA] uppercase mb-2" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                          ACTION
                        </h3>
                        <Link href="/platform/insight-driven-recommendations" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Insight-Driven Recommendations</Link>
                        <Link href="/platform/experience-optimization-signals" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Experience Optimization Signals</Link>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-[#A78BFA] uppercase mb-2" style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                          DATA & TRUST
                        </h3>
                        <Link href="/platform/data-governance" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Data Governance</Link>
                        <Link href="/platform/security-privacy" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Security & Privacy</Link>
                        <Link href="/platform/integrations" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Integrations</Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown Mobile */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="w-full flex items-center justify-between text-white hover:text-[#A78BFA] transition-colors text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Solutions
                  </button>
                  {solutionsOpen && (
                    <div className="mt-2 pl-4 space-y-1">
                      <Link href="/solutions/for-product-teams" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Product Teams</Link>
                      <Link href="/solutions/for-marketing-teams" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Marketing Teams</Link>
                      <Link href="/solutions/for-engineering-teams" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Engineering Teams</Link>
                      <Link href="/solutions/for-executives" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Executives</Link>
                      <Link href="/solutions/for-data-analytics-teams" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Data & Analytics Teams</Link>
                      <Link href="/solutions/for-privacy-compliance-teams" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Privacy & Compliance Teams</Link>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown Mobile */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="w-full flex items-center justify-between text-white hover:text-[#A78BFA] transition-colors text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}
                  >
                    Resources
                  </button>
                  {resourcesOpen && (
                    <div className="mt-2 pl-4 space-y-1">
                      <Link href="/docs" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Developer Docs</Link>
                      <Link href="/support" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Support & Documentation</Link>
                      <Link href="/resources" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#A78BFA] transition-colors text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
                    </div>
                  )}
                </div>

                {/* Other Links Mobile */}
                <Link href="/pricing" className="block text-white hover:text-[#A78BFA] transition-colors text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10 border-b border-white/10" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                  Pricing
                </Link>
                <Link href="/contact" className="block bg-white text-[#080707] hover:bg-[#A78BFA] hover:text-white transition-all text-base font-semibold px-4 py-3 rounded-lg text-center mt-2" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: 'var(--font-roboto), "Roboto", sans-serif' }}>
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
