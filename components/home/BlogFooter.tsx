'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const BlogFooter = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    }

    const socialLinks = [
        { icon: <FaTwitter />, href: "#", name: "Twitter" },
        { icon: <FaGithub />, href: "#", name: "GitHub" },
        { icon: <FaLinkedin />, href: "#", name: "LinkedIn" },
        { icon: <FiMail />, href: "#", name: "Email" },
        { icon: <FaRss />, href: "#", name: "RSS" }
    ]

    const footerLinks = [
        {
            title: "Quick Links", links: [
                { name: "Home", href: "/" },
                { name: "Articles", href: "/article" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
            ]
        },

        {
            title: "Legal", links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" }
            ]
        }
    ]

    return (
        <motion.footer
            className="w-full bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={footerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Newsletter Section */}
                    <motion.div
                        className="lg:col-span-2"
                        custom={0}
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
                        <p className="mb-6">Subscribe to our newsletter for the latest articles and news.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Footer Links Sections */}
                    {footerLinks.map((section, i) => (
                        <motion.div
                            key={section.title}
                            custom={i + 1}
                            variants={itemVariants}
                            className='flex flex-col  justify-center items-center'
                        >
                            <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, j) => (
                                    <motion.li
                                        key={link.name}
                                        custom={j * 0.1}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={link.href}
                                            className="hover:text-purple-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    className="h-px bg-gray-700 w-full my-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <motion.p
                        className="text-sm text-gray-500"
                        custom={0}
                        variants={itemVariants}
                    >
                        © {new Date().getFullYear()} Your Blog Name. All rights reserved.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-4"
                        custom={1}
                        variants={itemVariants}
                    >
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="text-gray-400 hover:text-purple-400 text-xl transition-colors duration-200"
                                whileHover={{ y: -3 }}
                                custom={i}
                                variants={itemVariants}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}

export default BlogFooter