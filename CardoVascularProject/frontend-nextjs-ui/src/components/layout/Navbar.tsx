'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '../ui/Button';
import { Activity, Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Data Insights', href: '/data-insights' },
        { name: 'About Model', href: '/about' },
    ];

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b border-[var(--color-border)] ${isScrolled ? 'bg-[var(--background)]/95 backdrop-blur-md py-3' : 'bg-[var(--background)] py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-[var(--foreground)] text-[var(--background)] p-1.5 rounded-md group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                            <Activity className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-serif font-bold tracking-tight text-[var(--foreground)]">
                            Cardio<span className="text-[var(--color-text-muted)]">ML</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-[var(--foreground)] ${pathname === link.href
                                    ? 'text-[var(--foreground)]'
                                    : 'text-[var(--color-text-muted)]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--color-border)] transition-colors text-[var(--color-text-muted)] hover:text-[var(--foreground)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}

                        <Link href="/predict">
                            <Button size="sm" className="bg-[var(--foreground)] hover:bg-[var(--color-text-muted)] text-[var(--background)] rounded-full px-6 font-medium text-sm transition-all shadow-none">
                                Start Analysis
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--color-border)] transition-colors text-[var(--color-text-muted)]"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}
                        <button
                            className="text-[var(--foreground)]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[var(--background)] md:hidden pt-24 px-6">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif font-bold text-[var(--foreground)] border-b border-[var(--color-border)] pb-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/predict" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full justify-center bg-[var(--foreground)] text-[var(--background)] rounded-full py-6 text-lg">
                                Start Analysis
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
