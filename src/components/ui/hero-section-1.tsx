import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FlowButton } from '@/components/ui/flow-button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.2,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            {/* Accessible Skip Navigation Link for Keyboard Users */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-white focus:text-black focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-black"
            >
                Saltar al contenido principal
            </a>

            <HeroHeader />

            <main id="main-content" tabIndex={-1} className="overflow-hidden flex flex-col items-center justify-center text-center outline-none">
                {/* Monochromatic Apple Ambient Lighting */}
                <div
                    aria-hidden="true"
                    className="z-[0] absolute inset-0 pointer-events-none isolate opacity-40 contain-strict hidden lg:block">
                    <div className="w-[50rem] h-[80rem] -translate-y-[350px] absolute left-1/2 -translate-x-1/2 top-0 rounded-full bg-[radial-gradient(68.54%_68.72%_at_50%_30%,hsla(0,0%,100%,.12)_0,hsla(0,0%,100%,.02)_50%,transparent_80%)]" />
                </div>

                <section id="hero" className="relative pt-32 md:pt-40 pb-12 w-full flex flex-col items-center justify-center text-center">
                    <div className="relative pt-6 md:pt-10 w-full flex flex-col items-center justify-center text-center">
                        <div aria-hidden="true" className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--bg-dark)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center">
                            <div className="text-center mx-auto flex flex-col items-center justify-center">
                                <AnimatedGroup variants={transitionVariants} className="flex flex-col items-center justify-center text-center">
                                    {/* The ONLY H1 tag on the entire page */}
                                    <h1
                                        className="mt-2 max-w-4xl mx-auto text-balance text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] text-center">
                                        Eleva tu servidor de <span className="text-gradient">FiveM.</span>
                                    </h1>

                                    {/* Subtitle */}
                                    <p
                                        className="mx-auto mt-6 max-w-2xl text-balance text-base md:text-lg text-zinc-400 leading-relaxed font-normal text-center">
                                        Sistemas y recursos premium listos para producción. Interfaces cuidadas, rendimiento resmon 0.00ms e instalación directa sin complicaciones.
                                    </p>
                                </AnimatedGroup>

                                {/* Action Buttons using FlowButton */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.4,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row mx-auto">
                                    <FlowButton
                                        href="https://tebex.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        text="Ver Catálogo en Tebex"
                                        className="px-8 py-3.5 text-base font-bold"
                                    />
                                    <FlowButton
                                        href="https://discord.gg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="secondary"
                                        text="Comunidad Discord"
                                        className="px-8 py-3.5 text-base"
                                    />
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Productos', href: '#products' },
    { name: 'Demostración', href: '#showcase' },
    { name: 'Ventajas', href: '#benefits' },
    { name: 'Compatibilidad', href: '#compatibility' },
    { name: 'FAQ', href: '#faq' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && menuState) {
                setMenuState(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [menuState])

    return (
        <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
            <nav
                aria-label="Navegación principal"
                className={cn(
                    "w-full max-w-5xl px-6 py-3.5 rounded-full border border-white/20 border-t-white/50 bg-black/80 backdrop-blur-2xl shadow-2xl shadow-black transition-all duration-300",
                    isScrolled && "max-w-4xl py-2.5 bg-black/92 border-white/40 shadow-white/10"
                )}
            >
                <div className="flex items-center justify-between gap-4">
                    {/* Brand Logo Enclosure */}
                    <a
                        href="#hero"
                        aria-label="Zyra Store - Ir al inicio"
                        className="flex items-center gap-2.5 text-decoration-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1"
                    >
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center font-black text-black text-base shadow-md shadow-white/20 border border-white">
                            Z
                        </div>
                        <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                            ZYRA<span className="text-zinc-400">STORE</span>
                        </span>
                    </a>

                    {/* Centered Desktop Menu Links */}
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300 m-0 p-0 list-none">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="hover:text-white transition-colors duration-150 py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Right CTA Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <FlowButton
                            href="https://discord.gg"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            text="Discord"
                            className="py-1.5 px-4 text-xs"
                        />
                        <FlowButton
                            href="https://tebex.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            text="Tienda Tebex"
                            className="py-1.5 px-4 text-xs font-bold"
                        />
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-expanded={menuState}
                        aria-controls="mobile-navigation"
                        aria-label={menuState ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        className="md:hidden text-zinc-200 p-2 hover:bg-zinc-800 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                {menuState && (
                    <div
                        id="mobile-navigation"
                        className="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-2 bg-black/98 backdrop-blur-2xl p-4 rounded-2xl border border-white/20 shadow-2xl"
                    >
                        <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="text-zinc-300 hover:text-white py-2 px-3 text-sm font-medium border-b border-zinc-900 block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3 mt-3 pt-2">
                            <FlowButton
                                href="https://tebex.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                text="Comprar en Tebex"
                                className="w-full justify-center text-xs"
                            />
                            <FlowButton
                                href="https://discord.gg"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                text="Comunidad Discord"
                                className="w-full justify-center text-xs"
                            />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
