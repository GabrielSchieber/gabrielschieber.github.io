import { DesktopIcon, GitHubLogoIcon, LinkedInLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
    Theme,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Card,
    Grid,
    Badge,
    Link,
    Separator,
    IconButton,
    Blockquote
} from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { useEffect, useState } from "react"

import chatbotDarkScreenshotURL from "./screenshots/chatbot_dark.png"
import chatbotLightScreenshotURL from "./screenshots/chatbot_light.png"

export default function App() {
    type Theme = "system" | "light" | "dark"

    const [theme, setTheme] = useState<Theme>(getTheme())

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function getTheme() {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "system" || storedTheme === "light" || storedTheme === "dark") {
            return storedTheme
        } else {
            return "system"
        }
    }

    function getAppearance() {
        return theme === "system" ? matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    useEffect(() => {
        const onResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return (
        <Theme
            appearance={getAppearance()}
            accentColor="indigo"
            grayColor="gray"
            radius="medium"
            scaling="100%"
        >
            <Flex direction="column" gap="9">
                <Flex
                    direction={windowWidth < 525 ? "column" : "row"}
                    justify="between"
                    align="center"
                    px="6"
                    pt="4"
                    mb="-5"
                    gap="2"
                >
                    <Heading size="4" align="center">Gabriel Schieber</Heading>

                    <Flex gap="4" wrap={windowWidth < 310 ? "wrap" : "nowrap"} align="center" justify="center">
                        <Link href="#projects">Projects</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#about">About</Link>
                        <Link href="#contact">Contact</Link>

                        <IconButton
                            aria-label="Toggle theme"
                            onClick={() => setTheme(theme === "system" ? "light" : theme === "light" ? "dark" : "system")}
                            style={{ cursor: "pointer" }}
                        >
                            {theme === "system" && <DesktopIcon />}
                            {theme === "light" && <SunIcon />}
                            {theme === "dark" && <MoonIcon />}
                        </IconButton>
                    </Flex>
                </Flex>

                <Separator size="4" />

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap="4"
                    px="6"
                >
                    <Heading size="8" align="center">
                        Full-Stack Software Engineer
                    </Heading>

                    <Text size="4" align="center" color="gray">
                        I build scalable web applications using Python, Django, React,
                        Vite, and Docker.
                    </Text>

                    <Flex gap="3" mt="4" wrap="wrap" justify="center">
                        <Button asChild size="3">
                            <a href="#projects">View Projects</a>
                        </Button>

                        <Button asChild size="3" variant="outline">
                            <a
                                href="https://fiverr.com/gabrielschieber"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Hire Me
                            </a>
                        </Button>
                    </Flex>
                </Flex>

                <Box id="projects" px="6">
                    <Heading size="6" mb="5">
                        Projects
                    </Heading>

                    <Grid columns={{ initial: "1" }} gap="5">
                        <Card>
                            <Flex direction="column" gap="3">
                                <Heading size="4">Chatbot</Heading>
                                <img src={getAppearance() === "dark" ? chatbotDarkScreenshotURL : chatbotLightScreenshotURL} width={windowWidth < 360 ? "auto" : 360} />
                                <Text size="3" color="gray">
                                    Full-stack AI personal assistant web app with real-time chat, message editing, and file uploads.
                                </Text>
                            </Flex>

                            <Flex gap="2" mt="3" wrap="wrap">
                                <Badge>Python</Badge>
                                <Badge>Django</Badge>
                                <Badge>WebSockets</Badge>
                                <Badge>Vite</Badge>
                                <Badge>React</Badge>
                                <Badge>Docker</Badge>
                            </Flex>

                            <Flex direction="column" gap="2" mt="3" wrap="wrap">
                                <Text>• Real-time chat via WebSockets</Text>
                                <Text>• Message editing & conversation history</Text>
                                <Text>• File uploads with backend validation</Text>
                            </Flex>

                            <Flex gap="3" mt="4">
                                <Link href="https://github.com/GabrielSchieber/Chatbot" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                                    <GitHubLogoIcon width={20} height={20} /> GitHub
                                </Link>
                            </Flex>
                        </Card>
                    </Grid>
                </Box>

                <Box id="skills" px="6">
                    <Heading size="6" mb="5">
                        Skills
                    </Heading>

                    <Grid columns={{ initial: "1", sm: "2", md: "4" }} gap="4">
                        <Card>
                            <Heading size="3">Backend</Heading>
                            <Text size="2" color="gray" mt="2">
                                Python, Django, Django REST Framework, WebSockets
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">Frontend</Heading>
                            <Text size="2" color="gray" mt="2">
                                React, Vite, TypeScript, HTML, CSS
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">DevOps</Heading>
                            <Text size="2" color="gray" mt="2">
                                Docker, Docker Compose, Dev Containers
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">Tools</Heading>
                            <Text size="2" color="gray" mt="2">
                                VS Code, Git, GitHub, Linux
                            </Text>
                        </Card>
                    </Grid>
                </Box>

                <Box id="about" px="6">
                    <Heading size="6" mb="4">
                        About Me
                    </Heading>

                    <Blockquote>
                        <Flex direction="column" gap="3">
                            <Text size="3" color="gray">
                                I’m a full-stack software engineer who enjoys working across the stack,
                                with a particular interest in backend architecture and real-time systems.
                                I like building applications that are reliable, maintainable,
                                and easy to reason about, from clean APIs to responsive user interfaces.
                            </Text>

                            <Text size="3" color="gray">
                                I value clear abstractions, thoughtful tradeoffs, and continuous learning,
                                and I’m looking for opportunities to contribute to well-engineered products while growing as an engineer.
                            </Text>
                        </Flex>
                    </Blockquote>
                </Box>

                <Separator size="4" />

                <Flex
                    id="contact"
                    direction="column"
                    align="center"
                    gap="3"
                    px="6"
                    pb="6"
                    mt="-5"
                >
                    <Text size="3" color="gray">
                        Get in touch
                    </Text>

                    <Flex gap="4" wrap="wrap" justify="center">
                        <Link href="https://github.com/GabrielSchieber">
                            <Flex align="center" gap="1">
                                <GitHubLogoIcon width={20} height={20} /> GitHub
                            </Flex>
                        </Link>

                        <Link href="https://linkedin.com/in/gabrielschieber">
                            <Flex align="center" gap="1">
                                <LinkedInLogoIcon width={20} height={20} /> LinkedIn
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Theme>
    )
}