"use client"

import type React from "react"

import {
  Shield,
  CheckCircle,
  Target,
  ArrowRight,
  Bug,
  Clock,
  BarChart3,
  Settings,
  PlayCircle,
  Activity,
  Zap,
  TrendingUp,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Code,
  AlertTriangle,
  CheckSquare,
  Star,
  ExternalLink,
  X,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo, useState } from "react"

const testingStats = [
  { label: "Test Cases Automated", value: "2,500+", icon: <CheckSquare className="w-5 h-5" /> },
  { label: "Bugs Prevented", value: "1,200+", icon: <Bug className="w-5 h-5" /> },
  { label: "Testing Speed Increase", value: "85%", icon: <Zap className="w-5 h-5" /> },
  { label: "Cost Reduction", value: "70%", icon: <TrendingUp className="w-5 h-5" /> },
]

const testingApproaches = [
  {
    title: "Functional Testing",
    description: "Comprehensive validation of application functionality",
    icon: <CheckCircle className="w-6 h-6" />,
    features: [
      { name: "Unit Testing", url: "https://junit.org/junit5/docs/current/user-guide/" },
      {
        name: "Integration Testing",
        url: "https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-testing",
      },
      { name: "System Testing", url: "https://www.guru99.com/system-testing.html" },
      { name: "User Acceptance Testing", url: "https://www.browserstack.com/guide/user-acceptance-testing" },
      { name: "Smoke Testing", url: "https://www.guru99.com/smoke-testing.html" },
      { name: "Regression Testing", url: "https://www.browserstack.com/guide/regression-testing" },
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Performance Testing",
    description: "Ensuring optimal application performance under load",
    icon: <BarChart3 className="w-6 h-6" />,
    features: [
      { name: "Load Testing", url: "https://jmeter.apache.org/usermanual/test_plan.html" },
      { name: "Stress Testing", url: "https://k6.io/docs/test-types/stress-testing/" },
      { name: "Volume Testing", url: "https://www.guru99.com/volume-testing.html" },
      { name: "Spike Testing", url: "https://k6.io/docs/test-types/spike-testing/" },
      { name: "Endurance Testing", url: "https://www.blazemeter.com/blog/endurance-testing" },
      { name: "Scalability Testing", url: "https://www.guru99.com/scalability-testing.html" },
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Security Testing",
    description: "Identifying vulnerabilities and security flaws",
    icon: <Shield className="w-6 h-6" />,
    features: [
      { name: "Penetration Testing", url: "https://owasp.org/www-project-web-security-testing-guide/" },
      { name: "Vulnerability Assessment", url: "https://www.zaproxy.org/docs/" },
      {
        name: "Authentication Testing",
        url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/04-Authentication_Testing/",
      },
      {
        name: "Data Protection",
        url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/09-Testing_for_Weak_Cryptography/",
      },
      {
        name: "SQL Injection Testing",
        url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05-Testing_for_SQL_Injection",
      },
      {
        name: "XSS Testing",
        url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting",
      },
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Mobile Testing",
    description: "Cross-platform mobile application validation",
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      { name: "Device Testing", url: "https://appium.io/docs/en/2.1/guides/device-farms/" },
      { name: "OS Compatibility", url: "https://developer.android.com/training/testing" },
      { name: "Performance Testing", url: "https://firebase.google.com/docs/test-lab/android/performance" },
      { name: "Usability Testing", url: "https://www.nngroup.com/articles/mobile-usability/" },
      {
        name: "Network Testing",
        url: "https://developer.android.com/training/testing/integration-testing/network-testing",
      },
      { name: "Battery Testing", url: "https://developer.android.com/topic/performance/power" },
    ],
    color: "from-green-500 to-emerald-600",
  },
]

const automationTools = [
  {
    category: "Web Automation",
    tools: [
      { name: "Selenium WebDriver", expertise: 95, description: "Cross-browser automation" },
      { name: "Cypress", expertise: 90, description: "Modern web testing" },
      { name: "Playwright", expertise: 85, description: "Multi-browser automation" },
      { name: "TestCafe", expertise: 80, description: "Node.js web testing" },
    ],
    icon: <Globe className="w-5 h-5" />,
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
    description: "Advanced web automation tools for comprehensive browser testing and validation",
    details: {
      overview:
        "We specialize in cutting-edge web automation technologies that deliver comprehensive testing coverage across all browsers and platforms. Our expertise spans the most powerful and reliable testing frameworks in the industry.",
      keyBenefits: [
        "Cross-browser compatibility testing",
        "Parallel test execution for faster results",
        "Advanced element detection and interaction",
        "Comprehensive reporting and analytics",
        "CI/CD pipeline integration",
        "Real-time test monitoring and alerts",
      ],
      useCases: [
        "End-to-end user journey testing",
        "Regression testing automation",
        "Cross-browser compatibility validation",
        "Performance and load testing",
        "API testing and validation",
        "Mobile web application testing",
      ],
    },
  },
  {
    category: "API Testing",
    tools: [
      { name: "Postman", expertise: 95, description: "API development & testing" },
      { name: "REST Assured", expertise: 90, description: "Java API testing" },
      { name: "Newman", expertise: 85, description: "Command line collection runner" },
      { name: "Insomnia", expertise: 80, description: "API client & testing" },
    ],
    icon: <Database className="w-5 h-5" />,
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
    description: "Comprehensive API testing solutions for robust backend validation and integration testing",
    details: {
      overview:
        "Our API testing expertise ensures your backend services are reliable, secure, and performant. We use industry-leading tools to validate API functionality, performance, and security.",
      keyBenefits: [
        "Automated API endpoint validation",
        "Performance and load testing",
        "Security vulnerability assessment",
        "Data validation and schema testing",
        "Integration testing automation",
        "Comprehensive test reporting",
      ],
      useCases: [
        "RESTful API testing",
        "GraphQL endpoint validation",
        "Microservices testing",
        "Third-party API integration",
        "Database connectivity testing",
        "Authentication and authorization testing",
      ],
    },
  },
  {
    category: "Mobile Testing",
    tools: [
      { name: "Appium", expertise: 90, description: "Cross-platform mobile automation" },
      { name: "Espresso", expertise: 85, description: "Android UI testing" },
      { name: "XCUITest", expertise: 80, description: "iOS automation framework" },
      { name: "Detox", expertise: 75, description: "React Native testing" },
    ],
    icon: <Smartphone className="w-5 h-5" />,
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
    description: "Advanced mobile testing frameworks for iOS and Android application validation",
    details: {
      overview:
        "We provide comprehensive mobile testing solutions that ensure your applications work flawlessly across all devices and operating systems. Our mobile testing expertise covers native, hybrid, and cross-platform applications.",
      keyBenefits: [
        "Cross-platform mobile automation",
        "Device-specific testing capabilities",
        "Performance and battery optimization testing",
        "Gesture and touch interaction validation",
        "Network condition simulation",
        "App store compliance testing",
      ],
      useCases: [
        "Native iOS and Android apps",
        "React Native applications",
        "Hybrid mobile applications",
        "Mobile web applications",
        "Wearable device applications",
        "IoT mobile interfaces",
      ],
    },
  },
  {
    category: "Performance Tools",
    tools: [
      { name: "JMeter", expertise: 90, description: "Load testing application" },
      { name: "K6", expertise: 85, description: "Modern load testing" },
      { name: "Gatling", expertise: 80, description: "High-performance testing" },
      { name: "Artillery", expertise: 75, description: "Modern performance toolkit" },
    ],
    icon: <Activity className="w-5 h-5" />,
    gradient: "gradient-mission",
    badgeClass: "badge-mission",
    description: "High-performance testing tools for load, stress, and scalability validation",
    details: {
      overview:
        "Our performance testing expertise ensures your applications can handle real-world traffic and usage patterns. We use advanced tools to simulate various load conditions and identify performance bottlenecks.",
      keyBenefits: [
        "Scalable load testing scenarios",
        "Real-time performance monitoring",
        "Bottleneck identification and analysis",
        "Stress and spike testing capabilities",
        "Resource utilization optimization",
        "Performance regression detection",
      ],
      useCases: [
        "Web application load testing",
        "API performance validation",
        "Database performance testing",
        "Microservices stress testing",
        "CDN and caching optimization",
        "Mobile app performance testing",
      ],
    },
  },
]

const testingMethodologies = [
  {
    phase: "01",
    title: "Test Strategy & Planning",
    description: "Comprehensive test planning and strategy development",
    duration: "1-2 weeks",
    deliverables: ["Test Strategy Document", "Test Plan", "Risk Assessment", "Resource Planning"],
    icon: <Target className="w-6 h-6" />,
    details: {
      overview:
        "We begin every testing project with comprehensive strategy development and planning. This phase establishes the foundation for successful test automation by defining clear objectives, identifying risks, and creating detailed roadmaps for implementation. Our strategic approach ensures alignment with business goals and technical requirements.",
      keyBenefits: [
        "Clear testing objectives and success criteria definition",
        "Comprehensive risk assessment and mitigation strategies",
        "Optimized resource allocation and timeline planning",
        "Stakeholder alignment on testing approach and expectations",
        "Foundation for scalable automation framework architecture",
        "Early identification of potential challenges and blockers",
        "Test environment and data requirements specification",
        "Quality gates and acceptance criteria establishment",
        "Tool selection and technology stack recommendations",
        "Budget estimation and cost-benefit analysis",
      ],
      useCases: [
        "New project test strategy development from scratch",
        "Legacy system testing modernization and migration",
        "Compliance and regulatory testing planning (HIPAA, SOX, GDPR)",
        "Cross-platform testing strategy for multi-device applications",
        "Performance testing roadmap creation for high-traffic systems",
        "Security testing framework planning for sensitive applications",
        "Agile and DevOps testing process integration",
        "Test automation ROI analysis and business case development",
        "Quality assurance process standardization across teams",
        "Third-party integration testing strategy development",
      ],
    },
  },
  {
    phase: "02",
    title: "Framework Development",
    description: "Building robust and scalable automation frameworks",
    duration: "2-3 weeks",
    deliverables: ["Automation Framework", "Test Data Management", "Reporting Setup", "CI/CD Integration"],
    icon: <Code className="w-6 h-6" />,
    details: {
      overview:
        "Our framework development phase focuses on creating robust, maintainable, and scalable automation infrastructure. We build custom frameworks tailored to your specific technology stack and business requirements, incorporating industry best practices and design patterns for maximum efficiency and reliability.",
      keyBenefits: [
        "Reusable and maintainable test automation code architecture",
        "Standardized testing patterns and practices across projects",
        "Integrated reporting and analytics capabilities with dashboards",
        "Seamless CI/CD pipeline integration with automated triggers",
        "Cross-browser and cross-platform support for comprehensive coverage",
        "Advanced test data management solutions with data factories",
        "Page Object Model implementation for UI test maintainability",
        "Parallel test execution capabilities for faster feedback loops",
        "Custom assertion libraries and validation utilities",
        "Environment-specific configuration management and deployment",
      ],
      useCases: [
        "Custom automation framework creation for unique technology stacks",
        "Legacy framework modernization and refactoring initiatives",
        "Multi-application testing framework for enterprise environments",
        "Cloud-based testing infrastructure setup and configuration",
        "Microservices testing framework with service virtualization",
        "Mobile automation framework setup for iOS and Android",
        "API testing framework with contract testing capabilities",
        "Performance testing framework integration with monitoring tools",
        "Security testing automation framework development",
        "Hybrid testing framework combining multiple testing approaches",
      ],
    },
  },
  {
    phase: "03",
    title: "Test Implementation",
    description: "Creating comprehensive test suites and scenarios",
    duration: "3-4 weeks",
    deliverables: ["Automated Test Scripts", "Test Data Sets", "Environment Setup", "Smoke Tests"],
    icon: <Settings className="w-6 h-6" />,
    details: {
      overview:
        "During the implementation phase, we create comprehensive test suites that cover all critical user journeys and business scenarios. Our focus is on building maintainable, reliable, and efficient automated tests that provide maximum coverage while minimizing maintenance overhead and false positives.",
      keyBenefits: [
        "Comprehensive test coverage across all features and user journeys",
        "Maintainable and well-documented test scripts with clear naming conventions",
        "Robust test data management and setup with data-driven approaches",
        "Environment-specific configuration management for multiple deployment stages",
        "Parallel test execution capabilities for reduced execution time",
        "Advanced assertion and validation techniques with custom matchers",
        "Error handling and recovery mechanisms for flaky test scenarios",
        "Test categorization and tagging for selective test execution",
        "Screenshot and video capture for failed test debugging",
        "Integration with defect tracking systems for automated bug reporting",
      ],
      useCases: [
        "End-to-end user journey automation covering critical business flows",
        "API and integration testing implementation with contract validation",
        "Database testing and validation with data integrity checks",
        "Cross-browser compatibility testing across multiple browsers and versions",
        "Mobile application test automation for native and hybrid apps",
        "Performance and load testing scripts with realistic user scenarios",
        "Security testing automation including vulnerability assessments",
        "Accessibility testing implementation for WCAG compliance",
        "Visual regression testing for UI consistency validation",
        "Smoke and sanity test suites for rapid deployment validation",
      ],
    },
  },
  {
    phase: "04",
    title: "Execution & Monitoring",
    description: "Continuous testing execution and result analysis",
    duration: "Ongoing",
    deliverables: ["Test Execution Reports", "Defect Reports", "Performance Metrics", "Maintenance"],
    icon: <Monitor className="w-6 h-6" />,
    details: {
      overview:
        "The execution and monitoring phase ensures continuous quality assurance through automated test runs, comprehensive reporting, and proactive maintenance. We provide ongoing support and optimization for sustained testing excellence, including performance monitoring, trend analysis, and continuous improvement initiatives.",
      keyBenefits: [
        "Continuous automated test execution with scheduled and triggered runs",
        "Real-time test result monitoring and alerts with instant notifications",
        "Comprehensive defect tracking and analysis with root cause identification",
        "Performance metrics and trend analysis with historical data comparison",
        "Proactive test maintenance and updates with automated script healing",
        "Quality gate enforcement and reporting with pass/fail criteria",
        "Test result analytics and insights with actionable recommendations",
        "Flaky test identification and stabilization with retry mechanisms",
        "Test coverage analysis and gap identification with improvement suggestions",
        "Integration with monitoring tools for production health validation",
      ],
      useCases: [
        "Continuous integration testing with every code commit and pull request",
        "Nightly regression test execution with comprehensive coverage",
        "Release quality gate validation with automated deployment decisions",
        "Performance monitoring and alerting with threshold-based notifications",
        "Production smoke testing with post-deployment validation",
        "Test result analytics and reporting with executive dashboards",
        "Automated test maintenance with self-healing capabilities",
        "Cross-environment testing validation across development stages",
        "A/B testing validation with statistical significance analysis",
        "Compliance testing execution with audit trail documentation",
      ],
    },
  },
]

const successMetrics = [
  {
    metric: "99.5%",
    label: "Test Coverage",
    description: "Comprehensive coverage across all application layers",
    icon: <CheckCircle className="w-8 h-8" />,
    trend: "+15%",
  },
  {
    metric: "60%",
    label: "Faster Releases",
    description: "Accelerated deployment cycles through automation",
    icon: <Clock className="w-8 h-8" />,
    trend: "+25%",
  },
  {
    metric: "85%",
    label: "Bug Reduction",
    description: "Significant decrease in production defects",
    icon: <Bug className="w-8 h-8" />,
    trend: "+30%",
  },
  {
    metric: "70%",
    label: "Cost Savings",
    description: "Reduced testing costs through automation",
    icon: <TrendingUp className="w-8 h-8" />,
    trend: "+20%",
  },
]

const technologyDocs: Record<string, string> = {
  "Selenium WebDriver": "https://selenium.dev/documentation/",
  Cypress: "https://docs.cypress.io/",
  Playwright: "https://playwright.dev/docs/",
  TestCafe: "https://testcafe.io/documentation/",
  Postman: "https://learning.postman.com/docs/",
  "REST Assured": "https://rest-assured.io/",
  Newman: "https://learning.postman.com/docs/collections/using-newman-cli/",
  Insomnia: "https://docs.insomnia.rest/",
  Appium: "https://appium.io/docs/",
  Espresso: "https://developer.android.com/training/testing/espresso",
  XCUITest: "https://developer.apple.com/documentation/xctest",
  Detox: "https://wix.github.io/Detox/",
  JMeter: "https://jmeter.apache.org/usermanual/",
  K6: "https://k6.io/docs/",
  Gatling: "https://gatling.io/docs/",
  Artillery: "https://www.artillery.io/docs",
}

const qaTestingTools = [
  {
    category: "Test Automation",
    icon: <Code className="w-6 h-6" />,
    items: [
      "Selenium WebDriver",
      "TestNG",
      "JUnit 5",
      "Cucumber",
      "Rest Assured",
      "Appium",
      "Playwright",
      "Cypress",
      "WebDriverIO",
      "Protractor",
      "Espresso",
      "XCUITest",
      "Robot Framework",
      "Katalon Studio",
    ],
    gradient: "from-green-500 to-emerald-600",
    badgeClass: "bg-green-500/20 text-green-200 border-green-400/30",
    description: "Advanced test automation frameworks for comprehensive testing coverage and reliability",
    details: {
      overview:
        "We utilize industry-leading test automation frameworks to ensure comprehensive test coverage, reliable execution, and maintainable test suites across web, mobile, and API testing. Our automation expertise spans multiple programming languages and testing paradigms, enabling us to create robust testing solutions tailored to your specific technology stack and business requirements.",
      keyBenefits: [
        "Cross-browser and cross-platform testing capabilities with parallel execution",
        "Data-driven and keyword-driven testing approaches for maximum reusability",
        "Parallel test execution for faster feedback loops and reduced testing time",
        "Comprehensive reporting and analytics with real-time dashboards",
        "Seamless CI/CD pipeline integration with automated test triggers",
        "Page Object Model implementation for maintainable UI test architecture",
        "Advanced test data management with factories and builders",
        "Custom assertion libraries and validation utilities for domain-specific testing",
        "Flaky test detection and automatic retry mechanisms for stability",
        "Integration with defect tracking systems for automated bug reporting",
      ],
      useCases: [
        "End-to-end web application testing with complex user workflows",
        "Mobile application automation for native iOS and Android apps",
        "API and microservices testing with contract validation",
        "Regression test automation with comprehensive coverage analysis",
        "Performance and load testing integration with monitoring tools",
        "Cross-browser compatibility testing across multiple browser versions",
        "Accessibility testing automation for WCAG compliance validation",
        "Visual regression testing for UI consistency across releases",
        "Database testing and validation with data integrity checks",
        "Security testing automation including vulnerability assessments",
      ],
    },
  },
  {
    category: "Performance Testing",
    icon: <Zap className="w-6 h-6" />,
    items: [
      "JMeter",
      "LoadRunner",
      "Gatling",
      "K6",
      "Artillery",
      "BlazeMeter",
      "WebPageTest",
      "Lighthouse",
      "New Relic",
      "AppDynamics",
      "Dynatrace",
      "Grafana",
      "Prometheus",
      "Locust",
    ],
    gradient: "from-green-500 to-emerald-600",
    badgeClass: "bg-green-500/20 text-green-200 border-green-400/30",
    description: "Comprehensive performance testing solutions for scalability and reliability validation",
    details: {
      overview:
        "Our performance testing expertise ensures your applications can handle expected loads and scale efficiently under various conditions, identifying bottlenecks before they impact users. We employ advanced performance testing methodologies and tools to simulate real-world usage patterns, stress test system limits, and optimize application performance across all layers of your technology stack.",
      keyBenefits: [
        "Load, stress, volume, and spike testing capabilities with realistic user scenarios",
        "Real-time performance monitoring with threshold-based alerting systems",
        "Scalability and capacity planning with predictive analysis and recommendations",
        "Performance bottleneck identification with detailed root cause analysis",
        "Cloud-based load generation with global distribution for realistic testing",
        "Detailed performance analytics and reporting with trend analysis",
        "Integration with APM tools for comprehensive performance visibility",
        "Performance regression detection with automated baseline comparisons",
        "Resource utilization optimization with infrastructure recommendations",
        "Performance testing automation with CI/CD pipeline integration",
      ],
      useCases: [
        "Web application load testing with realistic user journey simulation",
        "API performance validation with concurrent request handling analysis",
        "Database performance optimization with query analysis and tuning",
        "Cloud infrastructure scaling tests with auto-scaling validation",
        "Mobile app performance testing with device-specific constraints",
        "Microservices performance analysis with service dependency mapping",
        "CDN and caching optimization with global performance validation",
        "E-commerce platform testing with peak traffic simulation",
        "Real-time application testing with latency and throughput analysis",
        "IoT system performance testing with device simulation at scale",
      ],
    },
  },
  {
    category: "API Testing Solutions",
    icon: <Server className="w-6 h-6" />,
    items: [
      "Postman",
      "Rest Assured",
      "SoapUI",
      "Insomnia",
      "Newman",
      "Karate DSL",
      "Pact",
      "WireMock",
      "MockServer",
      "Swagger/OpenAPI",
      "GraphQL Testing",
      "Burp Suite",
      "OWASP ZAP",
      "Fiddler",
    ],
    gradient: "from-green-500 to-emerald-600",
    badgeClass: "bg-green-500/20 text-green-200 border-green-400/30",
    description: "Complete API testing ecosystem for microservices and distributed system validation",
    details: {
      overview:
        "We provide comprehensive API testing solutions that ensure your microservices and distributed systems communicate reliably, securely, and efficiently across all environments. Our API testing expertise covers the full spectrum of API validation, from functional testing and contract validation to security assessment and performance optimization, ensuring your APIs meet the highest standards of quality and reliability.",
      keyBenefits: [
        "RESTful and GraphQL API testing with comprehensive endpoint validation",
        "Contract testing and service virtualization for microservices architecture",
        "Security and penetration testing with vulnerability assessment capabilities",
        "Mock service creation and management for isolated testing environments",
        "API documentation validation with schema compliance verification",
        "Automated API regression testing with version compatibility checks",
        "Performance testing of API endpoints with load and stress scenarios",
        "Data validation and transformation testing with complex payload handling",
        "Authentication and authorization testing with multiple security protocols",
        "API monitoring and health checks with real-time alerting systems",
      ],
      useCases: [
        "Microservices integration testing with service mesh validation",
        "Third-party API validation with SLA compliance monitoring",
        "Contract testing between services with consumer-driven contracts",
        "API security and vulnerability testing with OWASP compliance",
        "Performance testing of API endpoints with concurrent user simulation",
        "API documentation and schema validation with OpenAPI specifications",
        "Legacy system API modernization with backward compatibility testing",
        "Event-driven architecture testing with message queue validation",
        "Multi-tenant API testing with data isolation verification",
        "API versioning and migration testing with rollback scenarios",
      ],
    },
  },
  {
    category: "Quality Management",
    icon: <Shield className="w-6 h-6" />,
    items: [
      "Jira",
      "TestRail",
      "Zephyr",
      "qTest",
      "Azure DevOps",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "SonarQube",
      "Checkmarx",
      "Veracode",
      "Snyk",
      "OWASP Dependency Check",
      "Quality Gates",
    ],
    gradient: "from-green-500 to-emerald-600",
    badgeClass: "bg-green-500/20 text-green-200 border-green-400/30",
    description: "Enterprise-grade quality management and continuous integration optimized solutions",
    details: {
      overview:
        "We implement comprehensive quality management systems that integrate seamlessly with your development workflow, ensuring consistent quality standards and efficient defect management. Our quality management approach encompasses the entire software development lifecycle, from requirements traceability and test planning to defect resolution and quality metrics reporting, providing complete visibility into your software quality posture.",
      keyBenefits: [
        "Test case management and traceability with requirements mapping",
        "Defect tracking and resolution workflows with automated notifications",
        "Quality metrics and reporting dashboards with executive-level insights",
        "CI/CD pipeline integration with automated quality gate enforcement",
        "Code quality analysis and security scanning with vulnerability management",
        "Compliance and audit trail management with regulatory reporting",
        "Risk-based testing with priority-driven test execution strategies",
        "Test environment management with automated provisioning and teardown",
        "Release management with quality-based deployment decisions",
        "Team collaboration tools with real-time communication and updates",
      ],
      useCases: [
        "Enterprise test management with multi-project coordination",
        "Agile and DevOps quality processes with sprint-based planning",
        "Regulatory compliance testing with audit trail documentation",
        "Security vulnerability management with remediation tracking",
        "Code quality enforcement with automated review processes",
        "Release quality gate automation with pass/fail criteria",
        "Multi-team collaboration with centralized quality oversight",
        "Risk management with impact assessment and mitigation strategies",
        "Performance monitoring with SLA compliance tracking",
        "Continuous improvement with quality metrics analysis and optimization",
      ],
    },
  },
]

const qaTechnologyDocs: Record<string, string> = {
  "Selenium WebDriver": "https://selenium.dev/documentation/",
  TestNG: "https://testng.org/doc/",
  "JUnit 5": "https://junit.org/junit5/docs/current/user-guide/",
  Cucumber: "https://cucumber.io/docs/cucumber/",
  "Rest Assured": "https://rest-assured.io/",
  Appium: "https://appium.io/docs/en/2.1/",
  Playwright: "https://playwright.dev/",
  Cypress: "https://docs.cypress.io/",
  WebDriverIO: "https://webdriver.io/docs/gettingstarted",
  Protractor: "https://www.protractortest.org/#/",
  Espresso: "https://developer.android.com/training/testing/espresso",
  XCUITest: "https://developer.apple.com/documentation/xctest",
  "Robot Framework": "https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html",
  "Katalon Studio": "https://docs.katalon.com/",
  JMeter: "https://jmeter.apache.org/usermanual/index.html",
  LoadRunner: "https://www.microfocus.com/documentation/loadrunner-professional/",
  Gatling: "https://gatling.io/docs/gatling/",
  K6: "https://k6.io/docs/",
  Artillery: "https://www.artillery.io/docs",
  BlazeMeter: "https://guide.blazemeter.com/",
  WebPageTest: "https://docs.webpagetest.org/",
  Lighthouse: "https://developers.google.com/web/tools/lighthouse",
  "New Relic": "https://docs.newrelic.com/",
  AppDynamics: "https://docs.appdynamics.com/",
  Dynatrace: "https://www.dynatrace.com/support/help/",
  Grafana: "https://grafana.com/docs/",
  Prometheus: "https://prometheus.io/docs/",
  Locust: "https://docs.locust.io/",
  Postman: "https://learning.postman.com/docs/",
  SoapUI: "https://www.soapui.org/docs/",
  Insomnia: "https://docs.insomnia.rest/",
  Newman:
    "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
  "Karate DSL": "https://github.com/karatelabs/karate",
  Pact: "https://docs.pact.io/",
  WireMock: "https://wiremock.org/docs/",
  MockServer: "https://www.mock-server.com/",
  "Swagger/OpenAPI": "https://swagger.io/docs/",
  "GraphQL Testing": "https://graphql.org/learn/",
  "Burp Suite": "https://portswigger.net/burp/documentation",
  "OWASP ZAP": "https://www.zaproxy.org/docs/",
  Fiddler: "https://docs.telerik.com/fiddler/",
  Jira: "https://support.atlassian.com/jira/",
  TestRail: "https://www.gurock.com/testrail/docs/",
  Zephyr: "https://support.smartbear.com/zephyr-scale-cloud/docs/",
  qTest:
    "https://support.tricentis.com/community/manuals_detail.do?lang=en&version=qTest&url=qtest_manager_user_guide.htm",
  "Azure DevOps": "https://docs.microsoft.com/en-us/azure/devops/",
  Jenkins: "https://www.jenkins.io/doc/",
  "GitHub Actions": "https://docs.github.com/en/actions",
  "GitLab CI/CD": "https://docs.gitlab.com/ee/ci/",
  SonarQube: "https://docs.sonarqube.org/latest/",
  Checkmarx: "https://checkmarx.com/resource/documents/",
  Veracode: "https://docs.veracode.com/",
  Snyk: "https://docs.snyk.io/",
  "OWASP Dependency Check": "https://owasp.org/www-project-dependency-check/",
  "Quality Gates": "https://docs.sonarqube.org/latest/user-guide/quality-gates/",
}

const QATechnologyModal = memo(
  ({ tech, isOpen, onClose }: { tech: (typeof qaTestingTools)[0]; isOpen: boolean; onClose: () => void }) => {
    const handleTechClick = (techName: string) => {
      const docUrl = qaTechnologyDocs[techName]
      if (docUrl) {
        window.open(docUrl, "_blank", "noopener,noreferrer")
      }
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }

    if (!isOpen) return null

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-2xl">{tech.category}</h3>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose} className="text-white/70">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{tech.details.overview}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Technologies Grid */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Tools We Use
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {tech.items.map((item, itemIndex) => (
                    <Badge
                      key={itemIndex}
                      className="bg-green-500/20 text-green-200 border-green-400/30 text-xs px-3 py-2 text-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => handleTechClick(item)}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {tech.details.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm text-white/80">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-400" />
                  Common Use Cases
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {tech.details.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                      <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

QATechnologyModal.displayName = "QATechnologyModal"

const MethodologyModal = memo(
  ({
    methodology,
    isOpen,
    onClose,
  }: { methodology: (typeof testingMethodologies)[0]; isOpen: boolean; onClose: () => void }) => {
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }

    if (!isOpen) return null

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                      <div className="text-white">{methodology.icon}</div>
                    </div>
                    <div>
                      <div className="text-white/70 text-sm mb-1">Phase {methodology.phase}</div>
                      <h3 className="text-white font-bold text-2xl">{methodology.title}</h3>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose} className="text-white/70">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{methodology.details.overview}</p>
                <div className="mt-4 flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration: {methodology.duration}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Deliverables */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {methodology.deliverables.map((deliverable, index) => (
                    <Badge
                      key={index}
                      className="bg-green-500/20 text-green-200 border-green-400/30 text-xs px-3 py-2 text-center justify-center"
                    >
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {methodology.details.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm text-white/80">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-400" />
                  Common Use Cases
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {methodology.details.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                      <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

MethodologyModal.displayName = "MethodologyModal"

const TestingApproachModal = memo(
  ({ approach, onClose }: { approach: (typeof testingApproaches)[0]; onClose: () => void }) => {
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }

    const handleFeatureClick = (url: string) => {
      window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                      <div className="text-white">{approach.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-2xl">{approach.title}</h3>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose} className="text-white/70">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{approach.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Core Testing Areas */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Core Testing Areas
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {approach.features.map((feature, index) => (
                    <Badge
                      key={index}
                      className="bg-green-500/20 text-green-200 border-green-400/30 text-xs px-3 py-2 text-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => handleFeatureClick(feature.url)}
                    >
                      {feature.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Testing Overview */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Testing Overview
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    {approach.title} is a critical component of our comprehensive QA strategy, focusing on{" "}
                    {approach.description.toLowerCase()}. This methodology ensures thorough validation across all
                    aspects of your application through systematic testing approaches and industry-standard practices.
                  </div>
                  <div className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    Our testing framework incorporates automated test execution, comprehensive reporting, and continuous
                    integration to deliver reliable results that meet enterprise-grade quality standards.
                  </div>
                  <div className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    We utilize cutting-edge tools and methodologies to ensure maximum test coverage while maintaining
                    efficiency and reducing time-to-market for your applications.
                  </div>
                </div>
              </div>

              {/* Expected Outcomes */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-400" />
                  Expected Outcomes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    99.9% Coverage Rate
                  </div>
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    50% Faster Detection
                  </div>
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    85% Cost Reduction
                  </div>
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    Improved Quality
                  </div>
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    Reduced Time to Market
                  </div>
                  <div className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    Enhanced User Experience
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

TestingApproachModal.displayName = "TestingApproachModal"

const TestingApproachCard = memo(
  ({ approach, index, onClick }: { approach: (typeof testingApproaches)[0]; index: number; onClick: () => void }) => (
    <Card
      className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Header with Icon and Title */}
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${approach.color} mr-3`}>{approach.icon}</div>
          <h3 className="text-white font-bold text-lg">{approach.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">{approach.description}</p>

        {/* Features List */}
        <ul className="space-y-2">
          {approach.features.map((feature, index) => (
            <li key={index} className="flex items-center text-white/70 text-xs">
              <ArrowRight className="w-3 h-3 mr-2 text-green-400" />
              {feature.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  ),
)

TestingApproachCard.displayName = "TestingApproachCard"

const MetricCard = memo(({ metric, index }: { metric: (typeof successMetrics)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden">
    <CardContent className="p-6">
      {/* Header with Icon */}
      <div className="gradient-qa-automation p-3 rounded-lg inline-flex mb-4">{metric.icon}</div>

      {/* Metric Value */}
      <div className="text-white font-bold text-2xl mb-2">{metric.metric}</div>

      {/* Label */}
      <div className="text-white/80 text-sm mb-3">{metric.label}</div>

      {/* Description */}
      <p className="text-white/70 text-xs leading-relaxed">{metric.description}</p>

      {/* Trend Indicator */}
      <div className="flex items-center justify-end mt-4">
        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
        <span className="text-green-400 text-xs">{metric.trend} Increase</span>
      </div>
    </CardContent>
  </Card>
))

MetricCard.displayName = "MetricCard"

const AutomationToolCard = memo(
  ({
    toolCategory,
    index,
    onClick,
  }: { toolCategory: (typeof automationTools)[0]; index: number; onClick: () => void }) => (
    <Card
      className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Header with Icon and Category */}
        <div className={`gradient-qa-automation p-3 rounded-lg inline-flex mb-4`}>{toolCategory.icon}</div>
        <h3 className="text-white font-bold text-lg mb-2">{toolCategory.category}</h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">{toolCategory.description}</p>

        {/* Tools List */}
        <ul className="space-y-2">
          {toolCategory.tools.slice(0, 3).map((tool, index) => (
            <li key={index} className="flex items-center text-white/70 text-xs">
              <ArrowRight className="w-3 h-3 mr-2 text-green-400" />
              {tool.name}
            </li>
          ))}
          {toolCategory.tools.length > 3 && (
            <li className="text-white/60 text-xs">+{toolCategory.tools.length - 3} more tools</li>
          )}
        </ul>
      </CardContent>
    </Card>
  ),
)

AutomationToolCard.displayName = "AutomationToolCard"

const MethodologyCard = memo(
  ({
    methodology,
    index,
    onClick,
  }: { methodology: (typeof testingMethodologies)[0]; index: number; onClick: () => void }) => (
    <Card
      className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Phase Number */}
        <div className="text-white/60 text-sm mb-2">Phase {methodology.phase}</div>

        {/* Header with Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="gradient-qa-automation p-3 rounded-lg inline-flex mr-3">{methodology.icon}</div>
          <h3 className="text-white font-bold text-lg">{methodology.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">{methodology.description}</p>

        {/* Duration */}
        <div className="text-white/70 text-xs mb-2">
          <Clock className="w-3 h-3 inline-block mr-1" />
          Duration: {methodology.duration}
        </div>

        {/* Deliverables List */}
        <ul className="space-y-2">
          {methodology.deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-center text-white/70 text-xs">
              <ArrowRight className="w-3 h-3 mr-2 text-green-400" />
              {deliverable}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  ),
)

MethodologyCard.displayName = "MethodologyCard"

const AutomationModal = memo(
  ({ tool, isOpen, onClose }: { tool: (typeof automationTools)[0]; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null

    const handleClose = () => {
      onClose()
    }

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <CardContent className="p-0">
            {/* Header */}
            <div className={`p-6 bg-gradient-to-br ${tool.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                      <div className="text-white">{tool.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-2xl">{tool.category}</h3>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose} className="text-white/70">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{tool.details.overview}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Key Benefits */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {tool.details.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm text-white/80">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-400" />
                  Common Use Cases
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {tool.details.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                      <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

AutomationModal.displayName = "AutomationModal"

const QATechnologyCard = memo(
  ({ tech, index, onClick }: { tech: (typeof qaTestingTools)[0]; index: number; onClick: () => void }) => (
    <Card
      className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Header with Icon and Category */}
        <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.gradient} inline-flex mb-4`}>{tech.icon}</div>
        <h3 className="text-white font-bold text-lg mb-2">{tech.category}</h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">{tech.description}</p>

        {/* Tools List */}
        <ul className="space-y-2">
          {tech.items.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-center text-white/70 text-xs">
              <ArrowRight className="w-3 h-3 mr-2 text-green-400" />
              {item}
            </li>
          ))}
          {tech.items.length > 3 && <li className="text-white/60 text-xs">+{tech.items.length - 3} more tools</li>}
        </ul>
      </CardContent>
    </Card>
  ),
)

QATechnologyCard.displayName = "QATechnologyCard"

export default function QAAutomationPage() {
  const [selectedQATech, setSelectedQATech] = useState<(typeof qaTestingTools)[0] | null>(null)
  const [selectedMethodology, setSelectedMethodology] = useState<(typeof testingMethodologies)[0] | null>(null)
  const [selectedTestingApproach, setSelectedTestingApproach] = useState<(typeof testingApproaches)[0] | null>(null)

  const router = useRouter()
  const [selectedTool, setSelectedTool] = useState<(typeof automationTools)[0] | null>(null)

  const handleStartTesting = useCallback(() => {
    router.push("/#contact")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [router])

  const handleViewReports = useCallback(() => {
    router.push("/portfolio")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }, [router])

  const handleStartProject = useCallback(() => {
    router.push("/#contact")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [router])

  const handleViewPortfolio = useCallback(() => {
    router.push("/portfolio")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section - Dashboard Style */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1">
                      Quality Assurance Excellence
                    </Badge>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                    Automated Testing
                    <br />
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      That Delivers
                    </span>
                  </h1>

                  <p className="text-white/80 text-base leading-relaxed max-w-xl">
                    Transform your software quality with our comprehensive QA automation solutions. We build intelligent
                    testing frameworks that catch bugs before they reach production, ensuring your applications perform
                    flawlessly at scale.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {testingStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="gradient-qa-automation p-2 rounded-lg inline-flex mb-2">{stat.icon}</div>
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleStartTesting}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Start Testing Journey
                  </Button>
                  <Button
                    onClick={handleViewReports}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Studies
                  </Button>
                </div>
              </div>

              {/* Right Side - Testing Dashboard Mockup */}
              <div className="relative">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-bold">Test Execution Dashboard</h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs">Live Testing</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-white text-sm">Login Flow Tests</span>
                        </div>
                        <Badge className="badge-qa-automation text-xs">Passed</Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <PlayCircle className="w-4 h-4 text-blue-400 mr-2" />
                          <span className="text-white text-sm">API Integration Tests</span>
                        </div>
                        <Badge className="badge-web-dev text-xs">Running</Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-white text-sm">Performance Tests</span>
                        </div>
                        <Badge className="badge-ux-design text-xs">Queued</Badge>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">Overall Coverage</span>
                        <span className="text-green-400 font-bold">94.7%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-[94.7%]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Approaches Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Testing Methodologies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Comprehensive Testing Approaches</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We employ multiple testing methodologies to ensure complete coverage and optimal quality assurance for
                your applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingApproaches.map((approach, index) => (
                <TestingApproachCard
                  key={approach.title}
                  approach={approach}
                  index={index}
                  onClick={() => setSelectedTestingApproach(approach)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-8 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Impact Metrics
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Proven Results & Impact</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Our QA automation solutions deliver measurable improvements across all key performance indicators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testing Arsenal */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Testing Arsenal
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Advanced Testing Arsenal</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We utilize cutting-edge testing tools and frameworks to ensure comprehensive quality assurance across
                all aspects of your applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qaTestingTools.map((tech, index) => (
                <QATechnologyCard
                  key={tech.category}
                  tech={tech}
                  index={index}
                  onClick={() => setSelectedQATech(tech)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testing Projects Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Success Stories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Featured Testing Projects</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Explore some of our recent QA automation projects that showcase our expertise and deliver exceptional
                quality assurance results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Enterprise Banking Platform",
                  description: "Comprehensive test automation for critical financial systems with 99.9% reliability",
                  image: "/assets/project-04.png",
                  technologies: ["Selenium", "TestNG", "Jenkins", "PostgreSQL", "Docker"],
                  metrics: { coverage: "98.5%", bugs: "95% ↓", speed: "70% ↑" },
                  category: "Financial",
                },
                {
                  title: "Healthcare Management System",
                  description: "HIPAA-compliant testing framework with advanced security validation protocols",
                  image: "/assets/project-05.png",
                  technologies: ["Cypress", "Postman", "K6", "MongoDB", "AWS"],
                  metrics: { compliance: "100%", automation: "85%", defects: "90% ↓" },
                  category: "Healthcare",
                },
                {
                  title: "E-commerce Performance Suite",
                  description: "Load testing and performance optimization for high-traffic retail platform",
                  image: "/assets/project-06.png",
                  technologies: ["JMeter", "Playwright", "Grafana", "Redis", "Kubernetes"],
                  metrics: { load: "10K users", response: "< 200ms", uptime: "99.99%" },
                  category: "E-commerce",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/50 text-white border-0 text-xs">{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="badge-qa-automation text-[10px] px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-green-400 font-bold text-sm">{value}</div>
                            <div className="text-white/60 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Methodology Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Our Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Streamlined Testing Methodology</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We follow a structured and iterative testing methodology to ensure comprehensive coverage and continuous
                improvement throughout the development lifecycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingMethodologies.map((methodology, index) => (
                <MethodologyCard
                  key={methodology.title}
                  methodology={methodology}
                  index={index}
                  onClick={() => setSelectedMethodology(methodology)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
                <div className="relative z-10">
                  <div className="gradient-qa-automation p-4 rounded-full inline-flex mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Elevate Your Testing Strategy?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Let's build a comprehensive QA automation framework that ensures your software meets the highest
                    quality standards while accelerating your development cycle.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={handleStartTesting}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Launch Testing Initiative
                    </Button>
                    <Button
                      onClick={handleViewReports}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Studies
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-3">SoftEdge Development</h3>
                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      At SoftEdge Development, we believe that a customer experience is the aggregate of all the
                      touchpoints that our clients experience with our services.
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://medium.com/@softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://instagram.com/softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://x.com/softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* Useful Links */}
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm">Useful Links</h4>
                    <div className="space-y-1">
                      <Link
                        href="/blog"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Blog
                      </Link>
                      
                      
                      <Link
                        href="/web-development"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/qa-automation"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Quality & Test Automation
                      </Link>
                      <Link
                        href="/ux-design"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        User Experience Design
                      </Link>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm">Contact Info</h4>
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          const email = "contact@softedgedevelopment.com"
                          const subject = "Project Inquiry - SoftEdge Development"
                          const body = `Hello SoftEdge Development,

I'm interested in discussing a project with you.

Please let me know when would be a good time to connect.

Thank you!`
                          const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                          const link = document.createElement("a")
                          link.href = mailtoUrl
                          link.target = "_blank"
                          link.rel = "noopener noreferrer"
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left cursor-pointer"
                      >
                        contact@softedgedevelopment.com
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/place/Seattle,+WA/@47.6062095,-122.3320708,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMGQ5anI",
                            "_blank",
                          )
                        }
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left cursor-pointer"
                      >
                        Seattle, Washington
                      </button>
                      <a
                        href="/portfolio"
                        className="block text-white/70 hover:text-white transition-colors text-xs pt-2 border-t border-white/10 mt-2"
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 mt-6 pt-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="text-white/60 text-xs">© 2025 SoftEdge Development. All rights reserved.</div>
                    <div className="flex gap-4">
  <Link
    href="/terms-of-service"
    className="text-white/60 hover:text-white transition-colors text-xs"
    onClick={() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }}
  >
    Terms of Service
  </Link>
  <Link
    href="/privacy-policy"
    className="text-white/60 hover:text-white transition-colors text-xs"
    onClick={() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }}
  >
    Privacy Policy
  </Link>
</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* QA Technology Modal */}
      {selectedQATech && (
        <QATechnologyModal tech={selectedQATech} isOpen={!!selectedQATech} onClose={() => setSelectedQATech(null)} />
      )}

      {/* Automation Modal */}
      {selectedTool && (
        <AutomationModal tool={selectedTool} isOpen={!!selectedTool} onClose={() => setSelectedTool(null)} />
      )}

      {/* Testing Approach Modal */}
      {selectedTestingApproach && (
        <TestingApproachModal approach={selectedTestingApproach} onClose={() => setSelectedTestingApproach(null)} />
      )}

      {/* MethodologyModal */}
      {selectedMethodology && (
        <MethodologyModal
          methodology={selectedMethodology}
          isOpen={!!selectedMethodology}
          onClose={() => setSelectedMethodology(null)}
        />
      )}
    </div>
  )
}
