const themes = [
      { id: "algorithms", label: "Pricing, AI & Decision Systems" },
      { id: "business-intelligence", label: "BI, Automation & Internal Tools" },
      { id: "marketing-science", label: "Growth, CRM & RevOps Systems" }
    ];

    const jobs = [
      { id: "moovez", label: "Moovez", industry: "Growth Marketing", org: "Moovez", start: "2020-10", end: "2023-04" },
      { id: "senate", label: "Senate", industry: "Public-Sector Operations", org: "Senate of Canada", start: "2023-04", end: "2024-09" },
      { id: "baywood", label: "Private Equity", industry: "Finance R&D", org: "Private Equity", start: "2024-01", end: "2024-07" },
      { id: "la-cite", label: "La Cite", industry: "Real Estate Sales Ops", org: "La Cite Gatineau", start: "2024-07", end: "2025-02" },
      { id: "trellis", label: "Trellis", industry: "SaaS / Amazon Tech", org: "Trellis", start: "2025-05", end: "2026-06" }
    ];

    const projects = [
      {
        id: "trellis-fape",
        title: "Forecast-Adaptive Pricing",
        shortTitle: "Pricing Automation",
        company: "Trellis",
        year: "2025",
        themes: ["algorithms"],
        date: "2025-09",
        roleId: "trellis",
        dates: "May 2025 - Present",
        visual: ["WMAPE", "SKU", "PRICE"],
        visualLabel: "Forecast signals, SKU performance, and price movement connected into a measurable pricing control loop.",
        tools: [
          ["Signals", ["Forecast", "Sales velocity", "Inventory", "Price bounds"]],
          ["Measurement", ["WMAPE", "Margin impact", "ROI", "Sales-to-plan"]],
          ["Product Work", ["Requirements", "Decision rules", "Explainability", "Client analysis"]],
          ["Domain", ["Amazon marketplace", "SKU catalogs", "Pricing strategy"]]
        ],
        role: "Pricing Product Owner work across algorithm logic, product requirements, marketplace analytics, client adoption, and decision-support workflows.",
        tags: ["Pricing", "Forecasting", "WMAPE", "Amazon marketplace", "Data product"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "Pricing logic that helps teams decide what to do next.",
            body: "Amazon catalogs move fast, and forecasts, inventory, margin, and demand do not always move together. The project focused on making pricing decisions more predictable for a major Amazon operator managing a large SKU base. The solution turned marketplace signals into targeted, explainable, and measurable price actions so operators could protect margin, recover demand, and avoid unnecessary changes.",
            metrics: [
              ["18x", "estimated ROI on discount efficiency"],
              ["4.5%", "margin improvement / less discount required"],
              ["12%", "WMAPE improvement, from roughly 48% to 36%"]
            ],
            bullets: [
              "Treated pricing as a control layer for demand, not just a lever for revenue.",
              "Connected algorithm behaviour to business outcomes like WMAPE, margin, sales-to-plan, and discount efficiency.",
              "Supported client-facing analysis for a $400M+ Amazon operator managing 18,000+ SKUs."
            ]
          },
          logic: {
            label: "Logic",
            headline: "The core problem was operational predictability.",
            body: "Large catalogs move faster than manual review cycles. The pricing rules respond to forecast drift while keeping discounting controlled and explainable.",
            bullets: [
              "Overperforming products can be underpriced relative to demand and may support price increases.",
              "Underperforming products may need selective demand recovery, not catalog-wide discounting.",
              "On-plan products should remain stable to reduce noise and unnecessary intervention.",
              "WMAPE was the right metric because the business cared about weighted forecast adherence, not just top-line sales growth."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Forecast -> signals -> pricing -> measurement.",
            body: "The architecture treated pricing as a decision matrix rather than a one-size-fits-all discounting rule. Each SKU was compared against forecast position, demand direction, margin pressure, and operating constraints before a price action was recommended. The goal was to make pricing logic explainable enough that operators could understand why the system protected margin, recovered demand, or held a product stable.",
            bullets: [
              "Forecast signal: expected sales rate and target sell-through plan.",
              "Demand signal: sales velocity, conversion behaviour, and deviation from plan.",
              "Pricing signal: current price, recent price changes, price bounds, and discount constraints.",
              "Measurement layer: WMAPE, margin impact, ROI, sales-to-plan, and discount efficiency."
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The next layer is smarter pricing intelligence.",
            body: "The pricing engine has a strong decision foundation. The opportunity is to add more context around elasticity, market conditions, and explainability so pricing recommendations become more adaptive and easier to trust at scale.",
            bullets: [
              { type: "caution", text: "Add controlled experiment design to compare algorithmic recommendations against manual pricing workflows." },
              { type: "neutral", text: "Segment elasticity by category, price band, brand strength, and competitive position." },
              { type: "neutral", text: "Model advertising, promotion calendars, and traffic shifts as context around price performance." },
              { type: "neutral", text: "Add explainability cards showing why each SKU moved up, moved down, or held." }
            ]
          }
        }
      },
      {
        id: "trellis-revops",
        title: "Revenue Funnel",
        shortTitle: "Looker Automation",
        company: "Trellis",
        year: "2025",
        themes: ["marketing-science"],
        date: "2025-11",
        roleId: "trellis",
        dates: "2025",
        visual: ["GA4", "LOOK", "CRM"],
        visualLabel: "Website behavior, landing page analysis, and HubSpot pipeline context joined into one funnel view.",
        tools: [
          ["Analytics", ["GA4", "Looker", "Landing pages", "Source / medium"]],
          ["CRM", ["HubSpot forms", "HubSpot contacts", "Leads", "Deals"]],
          ["Channels", ["Google Ads", "Bing Ads", "Amazon DSP", "LinkedIn Ads"]],
          ["AI Workflow", ["Claude", "Target clusters", "Landing page concepts", "Page copy direction"]],
          ["Workflow", ["Form capture", "Pipeline context", "Outbound follow-up"]]
        ],
        role: "Marketing science and revenue operations work connecting website analytics, paid media, forms, pipeline context, and outbound workflows.",
        tags: ["GA4", "Looker", "HubSpot", "Claude", "Landing pages", "RevOps"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "A clearer path from acquisition source to outbound opportunity.",
            body: "Traffic is useful, but pipeline is better. This project addressed the gap between campaign reporting and actual sales opportunity creation by connecting GA4, Looker, paid channels, target clusters, landing pages, HubSpot forms, and CRM pipeline records. Claude supported landing-page concept and copy direction based on clusters of target accounts, helping marketing and outbound teams understand which sources were creating real opportunities, not just clicks or sessions.",
            metrics: [
              ["GA4", "source, session, campaign, and landing page behavior"],
              ["HubSpot", "forms, contacts, leads, deals, and pipeline context"],
              ["4+", "paid channels: Google Ads, Bing Ads, Amazon DSP, LinkedIn Ads"]
            ],
            bullets: [
              "Moved reporting beyond traffic volume toward lead creation, pipeline context, and outbound follow-up.",
              "Used Claude to support landing-page concepts based on target account and persona clusters.",
              "Used Looker mainly for GA4 and landing-page analysis while HubSpot served as the CRM operating layer.",
            ]
          },
          logic: {
            label: "Logic",
            headline: "The useful question was not just which channels drove traffic.",
            body: "Marketing activity was spread across GA4, paid platforms, landing pages, HubSpot forms, and HubSpot pipelines. The more valuable question was how those sources connected to form submissions, lead records, deal activity, and outbound follow-up.",
            bullets: [
              "Website sessions did not automatically reveal lead quality or downstream pipeline value.",
              "Landing page performance needed to connect to form submissions and sales interest.",
              "HubSpot forms captured demand but needed stronger source and campaign context.",
              "Outbound follow-up improved when reps understood which page, form, or campaign created the lead."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Source -> session -> landing page -> form -> lead -> pipeline.",
            body: "The architecture connected marketing source data, target clusters, landing-page creation, and downstream CRM context. GA4 captured sessions and landing-page behavior, paid platforms supplied campaign source data, Claude supported landing-page concepts based on target clusters, Looker supported analysis, HubSpot forms created contact records, and pipeline records showed what happened after capture. The purpose was to move from isolated traffic reporting to a funnel view that connected source, page, form, lead, and deal context.",
            bullets: [
              "GA4 captured source / medium, campaign, session, engagement, and landing page behavior.",
              "Claude supported landing-page concepts and copy direction based on target account clusters.",
              "Looker surfaced GA4 and landing page performance for analysis.",
              "HubSpot forms created or updated contacts and lead records.",
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The next layer is cleaner revenue attribution.",
            body: "The funnel already connects traffic, landing pages, forms, and CRM context. The opportunity is to deepen attribution quality so marketing and outbound teams can prioritize the sources, pages, and campaigns most likely to create qualified pipeline.",
            bullets: [
              { type: "caution", text: "Strengthen campaign-to-contact attribution across paid sources, landing pages, and HubSpot records." },
              { type: "neutral", text: "Score leads using source, form, landing page, company attributes, and engagement behavior." },
              { type: "neutral", text: "Build pipeline-stage conversion reporting by campaign and landing page." },
              { type: "neutral", text: "Create outbound prioritization views directly inside HubSpot." }
            ]
          }
        }
      },
      {
        id: "senate-eims",
        title: "Operations Reporting",
        shortTitle: "M365 Automation",
        company: "Senate of Canada",
        year: "2023-2024",
        themes: ["business-intelligence"],
        date: "2023-12",
        roleId: "senate",
        dates: "Apr 2023 - Sep 2024",
        visual: ["M365", "FLOW", "BI"],
        visualLabel: "Outlook, Planner, SharePoint, and Power Automate structured into Power BI reporting for operations.",
        tools: [
          ["Workspace", ["SharePoint", "Teams", "Planner", "Microsoft Lists"]],
          ["Automation", ["Power Automate", "Outlook", "MS Forms", "Notifications"]],
          ["Data Layer", ["Excel", "Access", "Task records", "Inbox data"]],
          ["Reporting", ["Power BI", "DAX", "Workload KPIs", "Quarterly reporting"]]
        ],
        role: "Internal operations product work across SharePoint, Outlook, Planner, Power Automate, Excel, Access, Teams, and Power BI.",
        tags: ["SharePoint", "Power Automate", "Power BI", "Planner", "Internal tools"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "A Microsoft 365 internal tool that made operations visible.",
            body: "This project turned scattered inbox activity, task tracking, SharePoint lists, and manual reporting inputs into a structured operations workspace. The business problem was that work was happening across too many Microsoft 365 surfaces without a reliable management view. The solution connected workflows, task records, automation, and Power BI dashboards so managers could see workload, status, and reporting activity more clearly.",
            metrics: [
              ["65%", "reduction in quarterly manual email volume"],
              ["6,800", "quarterly manual emails reduced"],
              ["M365", "Forms, Outlook, Power Automate, SharePoint, Planner, Teams, Power BI"]
            ],
            bullets: [
              "Turned scattered operational activity into structured reporting inputs for managers.",
              "Connected Microsoft 365 tools into dashboards for workload, inbox activity, task status, overdue work, and quarterly reporting.",
              "Supported workflow mapping, automation logic, and stakeholder-facing implementation."
            ]
          },
          logic: {
            label: "Logic",
            headline: "The work existed, but the reporting layer was fragmented.",
            body: "Tasks, handoffs, inbox activity, service requests, and quarterly reporting inputs were spread across Outlook, Planner, Forms, Excel, SharePoint, and informal tracking. The portfolio value is in the conversion of that operational activity into structured management data.",
            bullets: [
              "Employees used different tracking methods, making continuity difficult when someone was away.",
              "Managers lacked visibility into workload distribution, overdue tasks, status, and completed work.",
              "Internal service requests created unnecessary manual email traffic.",
              "Quarterly reporting required too much manual consolidation."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Microsoft 365, arranged like an operating system.",
            body: "The architecture turned Microsoft 365 from a collection of separate tools into a connected operating layer for the office. SharePoint acted as the workspace, Teams handled collaboration, Planner and Lists captured task records, Power Automate routed events and notifications, and Power BI converted the activity into management reporting. The goal was to reduce manual status chasing and create a clearer view of workload, ownership, overdue work, and quarterly reporting inputs.",
            bullets: [
              "Power Automate captured forms, flagged emails, and request activity.",
              "SharePoint and Microsoft Lists stored structured task and ticket records.",
              "Power BI transformed inbox, task, and workflow data into management views.",
              "Teams surfaced notifications and connected employees to the workspace."
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The same pattern can scale into a broader operations platform.",
            body: "The Microsoft 365 system created a repeatable operating pattern for intake, ownership, automation, and reporting. The next opportunity is to make that pattern more proactive with better notifications, manager views, and continuous workflow improvement.",
            bullets: [
              { type: "caution", text: "Add proactive notifications for task assignment, approaching due dates, and overdue work." },
              { type: "neutral", text: "Add dashboard views for workload mix, service request volume, and quarterly reporting readiness." },
              { type: "neutral", text: "Use employee feedback to refine workspace navigation, forms, and adoption paths." },
              { type: "neutral", text: "Analyze recurring tasks to identify additional automation templates and reusable flows." }
            ]
          }
        }
      },
      {
        id: "la-cite",
        title: "Leasing Pipeline",
        shortTitle: "Zapier Automation",
        company: "La Cite Gatineau",
        year: "2024-2025",
        themes: ["business-intelligence"],
        date: "2024-10",
        roleId: "la-cite",
        dates: "Jul 2024 - Feb 2025",
        visual: ["CRM", "ZAP", "BI"],
        visualLabel: "Lead capture, booking workflows, and response reporting connected across CRM automation and BI.",
        tools: [
          ["CRM", ["Pipedrive", "Lead stages", "Tasks", "Follow-up cadences"]],
          ["Automation", ["Zapier", "Website forms", "Inbound email", "Calendly"]],
          ["Marketing Data", ["Google Analytics", "Meta Ads", "Google Ads", "WordPress"]],
          ["Reporting", ["Power BI", "Lead source", "Bookings", "Response time"]]
        ],
        role: "Sales operations and CRM automation work for a bilingual real estate leasing pipeline.",
        tags: ["Pipedrive", "Zapier", "Calendly", "Power BI", "CRM automation"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "A CRM workflow that stopped leaking leads.",
            body: "La Cite had demand coming from many places: website forms, inbound emails, ad campaigns, bookings, phone calls, referrals, and offline marketing. The operational risk was that strong lead generation could still leak value if follow-up was slow, inconsistent, or invisible. The solution turned that activity into a CRM, booking, follow-up, and reporting workflow so every lead could be tracked from source to showing.",
            metrics: [
              ["100+ -> 0", "monthly unanswered leads"],
              ["<24h", "average response time"],
              ["Full funnel", "source to showing, follow-up, and reporting visibility"]
            ],
            bullets: [
              "Created a more reliable path from inquiry to follow-up, booking, and reporting.",
              "Reduced unanswered monthly leads from 100+ to zero through CRM automation and response workflows.",
              "Built dashboard views for lead volume, source performance, pipeline movement, and booking activity."
            ]
          },
          logic: {
            label: "Logic",
            headline: "The main risk was not demand generation. It was operational leakage.",
            body: "Leads arrived from website forms, booking requests, inbound emails, phone calls, Meta Ads, Google Ads, Google Analytics, referrals, and offline marketing. Without a single operating workflow, even strong lead generation could still turn into missed follow-up.",
            bullets: [
              "Manual follow-up created risk of unanswered or delayed leads.",
              "Website, inbox, phone, ads, and CRM data were fragmented.",
              "Different inquiry types needed different response paths.",
              "Marketing performance needed to connect more directly to showing and leasing outcomes."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Inquiry sources -> CRM automation -> booking workflow -> BI reporting.",
            body: "The architecture connected lead sources, CRM records, automation, booking workflows, and reporting into one leasing pipeline. Pipedrive acted as the system of record, Zapier moved data between forms, inboxes, bookings, and CRM stages, Calendly supported showing bookings, and reporting tools turned CRM, website, inbox, and advertising data into sales operations visibility. The goal was to make follow-up reliable enough that no inquiry depended on memory or manual inbox review.",
            bullets: [
              "Zapier created or updated leads from inbound inquiries.",
              "Leads were classified by inquiry type: price question, general inquiry, specific unit inquiry, showing request, rental office question, post-showing follow-up, or nurture.",
              "Follow-up workflows standardized acknowledgment, call attempts, email follow-up, showing reminders, and long-term re-engagement.",
              "Power BI tracked lead volume, source performance, pipeline status, booking activity, and response workflow health."
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The next layer is source quality and leasing intelligence.",
            body: "The pipeline solved capture and follow-up visibility. The next opportunity is to connect source quality, showing behavior, nurture paths, and signed lease outcomes so the team can understand which acquisition paths create the highest-value prospects.",
            bullets: [
              { type: "caution", text: "Connect signed lease outcomes to CRM and source data once leasing data is consistently available." },
              { type: "neutral", text: "Add cost-per-showing and cost-per-lease reporting by source and campaign." },
              { type: "neutral", text: "Score leads based on source, inquiry type, budget, and booking behavior." },
              { type: "neutral", text: "Create stronger nurture paths for long-cycle prospects and future move dates." }
            ]
          }
        }
      },
      {
        id: "quant-trading",
        title: "Trading R&D",
        shortTitle: "Stock Trading R&D",
        company: "Private Equity",
        year: "2024",
        themes: ["algorithms"],
        date: "2024-04",
        roleId: "baywood",
        dates: "2024",
        visual: ["RSI", "PINE", "TEST"],
        visualLabel: "Technical signal logic translated into Pine Script rules and evaluated through TradingView backtesting.",
        tools: [
          ["Platform", ["TradingView", "Pine Script", "Strategy tester"]],
          ["Signals", ["Stochastic oscillator", "RSI", "4-period SMA"]],
          ["Risk Rules", ["0.4% stop loss", "1.8% take profit", "Layered exits"]],
          ["Evaluation", ["Sharpe", "Sortino", "Trade count", "Net profit"]]
        ],
        role: "Quantitative finance research project using Pine Script, TradingView, technical signals, and backtest evaluation.",
        tags: ["Pine Script", "TradingView", "Backtesting", "Signal logic", "R&D"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "Turning market intuition into testable rules.",
            body: "This was a quantitative finance R&D project that translated a technical trading idea into a repeatable Pine Script strategy. The goal was to move from visual chart interpretation to defined rules that could be tested consistently. The solution used TradingView backtesting, entry and exit logic, risk controls, and performance metrics to evaluate the idea while keeping clear caveats around simulated results.",
            metrics: [
              ["32.2%", "simulated net profit before commission and slippage"],
              ["184", "backtested S&P 500 Futures trades"],
              ["6.154", "reported Sortino ratio"]
            ],
            bullets: [
              "Designed long and short entry logic using stochastic oscillator zones, RSI behavior, and short-term moving-average direction.",
              "Evaluated the strategy on S&P 500 Futures from 2023-06-01 to 2024-04-26 using a simulated $100K account.",
              "Presented results as research output, with commission and slippage excluded."
            ]
          },
          logic: {
            label: "Logic",
            headline: "The value was the research process, not a claim of live performance.",
            body: "The goal was to move beyond visual chart reading by translating a technical hypothesis into programmable logic and evaluating it through backtest metrics, while keeping the limitations of simulated results clear.",
            bullets: [
              "Long entries used upward momentum and oversold stochastic conditions.",
              "Short entries used downward momentum and overbought stochastic conditions.",
              "RSI rate of change and short-term moving average direction acted as confirmation filters.",
              "Layered exit nets reduced dependence on one brittle reversal threshold."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Hypothesis -> signal rules -> Pine Script -> backtest -> review.",
            body: "The architecture translated a technical trading hypothesis into a rules-based research workflow. TradingView provided the testing environment, while Pine Script defined entry signals, confirmation filters, stop-loss rules, take-profit logic, and layered exits. The point was to make the idea inspectable: every trade came from explicit conditions, and performance could be reviewed through repeatable backtest results instead of subjective chart interpretation.",
            bullets: [
              "Oversold stochastic D range: 3 to 24.",
              "Overbought stochastic D range: 78 to 84.",
              "Long exits used stochastic crosses under 94, 78, and 62.",
              "Evaluation used net profit, trade count, Sharpe, Sortino, average trade, and win/loss ratio."
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The next step is research-grade validation.",
            body: "The strategy should remain an R&D artifact until it is tested with more realistic assumptions and stronger robustness checks. The opportunity is to move from a promising backtest into a disciplined validation workflow with transaction costs, forward testing, Monte Carlo analysis, and market-regime review.",
            bullets: [
              { type: "stop", text: "Do not implement without more verbose backtesting, walk-forward testing, and Monte Carlo forward simulation." },
              { type: "stop", text: "Add commission, slippage, spread assumptions, and out-of-sample validation before treating results as decision-grade." },
              { type: "caution", text: "Stress test parameters across trend, chop, volatility expansion, and drawdown regimes." },
              { type: "neutral", text: "Compare against simple baselines and risk-adjusted benchmarks to isolate actual signal value." }
            ]
          }
        }
      },
      {
        id: "moovez-growth",
        title: "Growth Campaigns",
        shortTitle: "Campaign Automation",
        company: "Moovez",
        year: "2020-2023",
        themes: ["marketing-science"],
        date: "2022-06",
        roleId: "moovez",
        dates: "Oct 2020 - Apr 2023",
        visual: ["ADS", "SEO", "MAIL"],
        visualLabel: "Acquisition work across paid campaigns, SEO, email, organic media, and response tracking.",
        tools: [
          ["Channels", ["Email", "Organic social", "Facebook Ads", "Google Ads"]],
          ["Acquisition", ["SEO", "Outbound email", "Newsletters", "Campaign pages"]],
          ["AI Content", ["ChatGPT", "Caption drafting", "Content schedules", "Copy iteration"]],
          ["Measurement", ["Reply rate", "Engagement rate", "Channel comparison"]],
          ["Operations", ["Campaign setup", "Audience testing", "Reporting", "Iteration"]]
        ],
        role: "Early growth marketing operations across email, outbound, organic social, paid media, SEO, and campaign analytics.",
        tags: ["Email", "Facebook Ads", "Google Ads", "ChatGPT", "SEO", "Growth analytics"],
        tabs: {
          overview: {
            label: "Overview",
            headline: "Early growth work across campaigns, channels, and measurement.",
            body: "Moovez was where I learned the mechanics of growth: messaging, audience, channel, response, and iteration. The work supported early acquisition activity across email, outbound, organic social, paid campaigns, search, SEO, and AI-assisted content preparation. ChatGPT helped draft captions and prepare content schedules, while the broader solution created a practical campaign operating loop where channel activity could be launched, measured, compared, and improved over time.",
            metrics: [
              ["10.53%", "email campaign reply rate"],
              ["12%", "organic media engagement rate"],
              ["2020-2023", "campaign operations period"]
            ],
            bullets: [
              "Worked across the full campaign loop: message, channel, audience, response, engagement, and iteration.",
              "Used ChatGPT to draft captions and prepare content schedules for campaign execution.",
              "Supported email campaigns with a 10.53% reply rate and organic media with a 12% engagement rate.",
            ]
          },
          logic: {
            label: "Logic",
            headline: "Campaign channels needed consistent execution and measurement.",
            body: "Moovez needed practical digital marketing support across organic social, newsletters, outbound email, Facebook campaigns, Google Ads, SEO, ChatGPT-assisted captions, content schedules, and sales activity. The operating problem was keeping channel execution measurable and connected to response data.",
            bullets: [
              "Campaigns needed to stay organized across multiple channels.",
              "Email and outbound activity had to support lead generation and sales follow-up.",
              "Paid and organic performance needed basic tracking to create a learning loop.",
              "The work showed how channel data becomes more powerful when connected to CRM and funnel outcomes."
            ]
          },
          architecture: {
            label: "Architecture",
            headline: "Campaign concept -> channel execution -> response tracking -> iteration.",
            body: "The architecture connected campaign execution, content work, AI-assisted drafting, traffic measurement, and learning loops across a lightweight growth stack. Newsletters, outbound email, organic content, paid social, paid search, SEO, and ChatGPT-supported content scheduling each supported different parts of acquisition. Analytics helped compare response, engagement, and channel quality so campaign work stayed iterative: launch, measure, refine, and carry the learning forward.",
            bullets: [
              "Email newsletters supported audience engagement and nurture.",
              "ChatGPT supported caption drafting and content schedule preparation.",
              "Outbound pipelines supported sales outreach and follow-up.",
              "Facebook and Google Ads tested paid acquisition signals.",
            ]
          },
          future: {
            label: "Next Steps",
            headline: "The next layer is cleaner campaign learning.",
            body: "The campaign workflow created a practical growth operating loop. The opportunity is to make the learning more durable by standardizing source tracking, connecting activity to lead stages, and keeping a clearer record of what each campaign tested.",
            bullets: [
              { type: "caution", text: "Use standardized UTM conventions and campaign naming across every channel." },
              { type: "neutral", text: "Add CRM stage tracking by source and campaign." },
              { type: "neutral", text: "Build channel dashboards for reply, conversion, cost, and engagement metrics." },
              { type: "neutral", text: "Keep campaign testing logs so creative, audience, and channel learning compounds over time." }
            ]
          }
        }
      }
    ];

    const education = {
      university: {
        kicker: "University education",
        title: "Bachelor of Commerce - Economics, Econometrics & Programming",
        summary: "A quantitative business foundation for pricing systems, forecasting, automation, analytics products, and AI-enabled decision workflows.",
        abilities: "Regression, time series, panel data, statistical modelling, pricing strategy, forecasting, optimization, and decision-making under uncertainty.",
        cards: [
          {
            title: "Econometrics & Forecasting",
            summary: "Statistical methods for modelling relationships, testing assumptions, and evaluating forecasts.",
            courses: ["Applied econometrics", "Regression analysis", "Time series forecasting", "Panel data methods"]
          },
          {
            title: "Economic Data Analysis",
            summary: "Data work for economic and business questions, from retrieval and cleaning to interpretation.",
            courses: ["Economic data analysis", "Statistical software", "Spreadsheet modelling", "Database work"]
          },
          {
            title: "Finance & Risk",
            summary: "Financial decision-making under uncertainty with emphasis on markets, risk, and valuation.",
            courses: ["Financial economics", "Portfolio theory", "Asset pricing", "Risk-adjusted decisions"]
          },
          {
            title: "Strategy & Markets",
            summary: "Market structure, incentives, competition, and pricing decisions in business contexts.",
            courses: ["Industrial organization", "Game theory", "Pricing strategy", "Optimization"]
          }
        ]
      },
      certifications: {
        kicker: "Professional certificates",
        title: "Coursera / IBM Professional Certificates",
        summary: "Applied technical training across data science, full-stack software development, data engineering, AI application development, and RevOps workflows.",
        abilities: "Python workflows, SQL, databases, ETL pipelines, dashboards, machine learning, React, Flask, Docker, cloud-native development, prompt engineering, and AI product workflows.",
        logo: "../Tools/Coursera.png",
        cards: [
          {
            title: "IBM Data Engineering",
            summary: "Practical data infrastructure training across databases, ETL, warehousing, and dashboard-ready pipelines.",
            certificateUrl: "https://www.coursera.org/account/accomplishments/professional-cert/V7YTE7PSZM2X",
            courses: ["Python for data engineering", "SQL and relational databases", "ETL and data pipelines", "Warehousing and BI dashboards"]
          },
          {
            title: "IBM Full Stack Software Developer",
            summary: "Application development training across frontend, backend, APIs, containers, and cloud-native delivery.",
            certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/LUYE433XUTQA",
            courses: ["React and frontend development", "Node, Flask and Django", "Docker and Kubernetes", "Microservices and GitHub"]
          },
          {
            title: "IBM Data Science",
            summary: "Applied analytics and modelling training for data cleaning, visualization, regression, and machine learning.",
            certificateUrl: "https://www.coursera.org/account/accomplishments/professional-cert/TVSSGRGUQC9S",
            courses: ["Python, pandas and NumPy", "Data visualization", "Regression and classification", "Applied machine learning"]
          },
          {
            title: "IBM AI Developer",
            summary: "AI application training focused on prompt engineering, chatbots, Flask AI apps, and RAG concepts.",
            certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/REFFXRRYCPLQ",
            courses: ["Generative AI fundamentals", "Prompt engineering", "Chatbots and Flask AI apps", "LangChain and RAG concepts"]
          }
        ]
      }
    };
