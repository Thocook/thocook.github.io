# Portfolio Project Context — Senate of Canada EIMS / Digital Workspace

## Project Name
**Executive Information Management System (EIMS) / Digital Workspace**  
**Organization:** Senate of Canada — Property & Services Directorate  
**Project Type:** Internal operations platform, Microsoft 365 workspace, workflow automation, dashboarding, data pipelines  
**Period:** Apr 2023 – Sep 2024  
**Roles:** Automation Developer Intern; Automation Project Lead Intern

## Portfolio Positioning
This project should be presented as an internal data product and workflow automation platform built inside the Microsoft 365 ecosystem. It was not only a dashboard project. It combined SharePoint, Teams, Planner, Outlook, Power Automate, Microsoft Lists, Excel/Access, and Power BI into a centralized operational workspace for task intake, employee workflow visibility, manager reporting, and quarterly performance reporting.

Use this core framing:

> Led and developed a Microsoft 365 executive information management system that converted scattered emails, forms, Planner tasks, and manual tracking into a structured SharePoint / Teams workspace with automated ticketing, task workflows, and Power BI dashboards for management reporting.

## Role Progression

### Automation Developer Intern  
**Apr 2023 – Dec 2023 · 9 months**  
Ontario, Canada

Primary focus: building the technical foundations of the system.

Key responsibilities:

- Developed automation pipelines integrating **MS Forms, Excel, Power Automate, SharePoint, and Power BI**.
- Helped digitize internal service requests and standardize intake processes.
- Built workflow logic to move information from intake channels into structured task and reporting systems.
- Supported the creation of dashboard-ready datasets from Microsoft 365 operational tools.

Portfolio framing:

> Built the first automation and reporting pipelines that connected Microsoft 365 intake tools to SharePoint and Power BI, helping digitize internal service requests and replace manual tracking with structured workflow data.

### Automation Project Lead Intern  
**Dec 2023 – Sep 2024 · 10 months**

Primary focus: leading the project, gathering requirements, and scaling the workflow system.

Key responsibilities:

- Led a student development team.
- Collaborated with directorates to gather requirements and map current and future workflows.
- Documented decision logic, task routing, and automation rules.
- Translated stakeholder needs into approved automation solutions.
- Optimized ticketing and email workflows.
- Reduced quarterly manual emails from approximately **10,400 to 3,600**, a **65% reduction in email volume**, through automated ticketing and process redesign.

Portfolio framing:

> Led the student automation team through discovery, workflow mapping, solution design, and stakeholder approval, then scaled automated ticketing workflows that reduced quarterly manual email volume by 65%.

## Business Problem
The Directorate did not have a consistent system for recording daily tasks, tracking completed work, or managing handoffs. Work was being discussed in daily meetings and then tracked individually by employees in whatever format they preferred. This created confusion around ownership, status, continuity, and management reporting.

Key pain points:

- Employees lacked a single source of truth for assigned and ongoing work.
- Managers lacked visibility into completed tasks, overdue tasks, workload distribution, and ongoing priorities.
- Work was difficult to pick up when employees were away from the office.
- Reporting data was scattered across Outlook, Planner, Forms, Excel, SharePoint, and informal tracking systems.
- Internal service requests and operational tasks created large volumes of manual email traffic.
- Quarterly reporting required too much manual consolidation.

## Solution Overview
The solution was a Microsoft 365-based digital workspace and reporting system. It created a hub where employees and managers could manage tasks, reference materials, project updates, notes, service requests, and dashboards from one place.

Core solution components:

- **SharePoint hub:** Central operational workspace for reference materials, lists, intake data, task records, reporting links, and team resources.
- **Microsoft Teams:** Team-level collaboration layer organized through channels and tabs.
- **Planner / Microsoft Lists:** Structured task and ticket management layer for ownership, priority, due dates, status, and work handoffs.
- **MS Forms:** Standardized intake layer for internal requests and service workflows.
- **Outlook + Power Automate:** Automated task creation and notification workflows from flagged emails, inbox activity, and incoming requests.
- **Excel / Access data layer:** Intermediate data storage and transformation layer used to clean, structure, and prepare operational data.
- **Power BI dashboards:** Analytics and management reporting layer for workload, inbox activity, ticket volume, overdue work, and quarterly reporting.

## System Architecture / Workflow
Simple version:

> MS Forms / Outlook / Planner → Power Automate → SharePoint / Lists / Excel / Access → Power BI → Teams / SharePoint Hub → Management Reporting

Detailed workflow:

1. Work entered the system through MS Forms, Outlook emails, flagged emails, Planner tasks, and manually created tasks.
2. Power Automate captured relevant activity and created structured task or ticket records.
3. Task, ticket, and intake data were stored in SharePoint, Microsoft Lists, Excel, and Access.
4. Data was cleaned and organized for reporting.
5. Power BI dashboards transformed the operational data into executive-level views.
6. SharePoint and Teams surfaced the reports, tasks, notes, and reference materials in one workspace.
7. Teams notifications alerted employees or channels when new tasks were created or required action.

## Key Features

### 1. SharePoint Digital Workspace
Created a centralized SharePoint-based workspace that acted as the operational home for the Directorate. The workspace organized reference materials, reporting links, task lists, Planner boards, notes, wikis, and Power BI dashboards.

Portfolio framing:

> Designed a SharePoint hub that consolidated fragmented operational workflows into one accessible digital workspace for employees and managers.

### 2. Teams and Channel Architecture
Structured Microsoft Teams channels and tabs so each team or division could connect conversations, tasks, reference material, notes, and reporting in one place.

Useful wording:

> Designed Teams channel architecture so employees could move from conversation to tasks, documentation, and dashboards without leaving the Microsoft 365 environment.

### 3. Standardized Intake and Ticketing
Used MS Forms, SharePoint, Microsoft Lists, and Power Automate to standardize internal service request intake and reduce manual back-and-forth email.

Impact:

- Reduced quarterly manual emails from approximately **10,400 to 3,600**.
- Achieved an estimated **65% reduction in email volume**.
- Replaced scattered request handling with a more structured ticketing process.

Portfolio framing:

> Standardized request intake and automated ticket creation, reducing manual email volume by 65% while creating structured data for reporting.

### 4. Planner and Task Management
Used Planner and Microsoft Lists as the task management layer. Tasks could be assigned, prioritized, tracked, and surfaced to managers through dashboards.

Use this to show product thinking:

> Treated task management as a data product, designing fields, statuses, ownership logic, priority logic, and reporting views so daily work could become structured management data.

### 5. Power Automate Task Creation
Created automation flows where flagged Outlook emails, incoming service requests, or new intake records could automatically generate task records and trigger Teams notifications.

Core workflow:

- Employee flags an email or submits / receives a request.
- Power Automate detects the trigger.
- A task or ticket is created in SharePoint / Microsoft Lists / Planner.
- Relevant metadata is stored for reporting.
- A notification is pushed to the relevant Teams channel.

Portfolio framing:

> Automated the conversion of email and request activity into structured task records, making inbox-driven work visible, assignable, and reportable.

### 6. Power BI Dashboard
Built Power BI dashboards to give managers a clear overview of workload, inbox activity, task volume, overdue tasks, service / division activity, and quarterly reporting metrics.

Dashboard examples:

- Count of emails received by month.
- Emails received by service and division.
- Task status and completion views.
- Overdue projects and overdue tasks.
- Workload distribution by employee.
- High-level executive overview pages.
- Quarterly reporting views.

Portfolio framing:

> Created Power BI dashboards that transformed operational activity into executive reporting views, giving managers visibility into workload, bottlenecks, overdue work, and team productivity.

### 7. Quarterly Reporting Pipeline
The system supported quarterly reporting by centralizing data from operational systems and turning it into repeatable reporting outputs.

Portfolio framing:

> Replaced ad hoc quarterly reporting workflows with a repeatable data pipeline connecting intake, task, and inbox data to Power BI dashboards.

## MVP Scope
The MVP proved that the Directorate could use existing Microsoft 365 tools to build an integrated information management system.

MVP features included:

- Manager dashboard.
- Automatic task creation from flagged emails.
- Teams channel notifications.
- Microsoft Lists task interface.
- SharePoint workspace for task and reference material.
- Power BI reporting for ongoing work and overdue tasks.
- Early service request intake automation.

## Future-State Vision
The future-state roadmap expanded the MVP into a more mature internal operations platform.

Planned improvements:

- Expand automation functions.
- Add more dashboard analysis tools.
- Improve the notification system.
- Notify employees when tasks are assigned or due soon.
- Use employee feedback to improve UI and usability.
- Work with managers to define a dashboard “wish list.”
- Analyze recurring employee tasks to identify additional automation opportunities.

## My Role — Strong Version
Use this version when describing the project on a portfolio page:

> I started as an Automation Developer, building Microsoft 365 automation pipelines that connected MS Forms, Excel, Power Automate, SharePoint, and Power BI. I later became Automation Project Lead, where I led a student development team, gathered requirements from directorates, mapped current and future workflows, documented decision logic, and translated stakeholder needs into approved automation solutions. The project reduced quarterly manual emails from roughly 10,400 to 3,600, a 65% reduction, by standardizing intake and automating ticketing workflows.

## My Role — Short Version
Use this version for a resume, LinkedIn, or short portfolio card:

> Led and developed Microsoft 365 automation pipelines connecting MS Forms, Outlook, Power Automate, SharePoint, Planner, Excel, and Power BI, reducing quarterly manual emails from approximately 10,400 to 3,600 through automated ticketing and workflow redesign.

## Skills Demonstrated

### Data / Analytics
- Power BI dashboard design.
- DAX and data modeling.
- Operational KPI definition.
- Reporting workflow design.
- Data cleaning and transformation.
- Quarterly reporting automation.
- Dashboard usability for non-technical managers.

### Product / Systems Thinking
- Internal product MVP design.
- Workflow mapping.
- Stakeholder discovery.
- Requirement gathering.
- Current-state and future-state process mapping.
- Decision logic documentation.
- Roadmap planning.
- Translating messy operational processes into structured systems.

### Microsoft 365 / Automation
- SharePoint hub design.
- Microsoft Teams workspace architecture.
- Planner task management.
- Microsoft Lists.
- MS Forms intake workflows.
- Power Automate workflows.
- Outlook workflow automation.
- Excel / Access data integration.
- Power BI report publishing.

### Leadership / Delivery
- Student development team leadership.
- Stakeholder collaboration with directorates.
- Requirements translation.
- Automation solution design.
- Process optimization.
- Cross-functional communication.
- Stakeholder-approved implementation.

## Strong Resume Bullets

- Led a student automation team building Microsoft 365 workflow solutions across MS Forms, Outlook, Power Automate, SharePoint, Planner, Excel, and Power BI.
- Reduced quarterly manual emails from approximately 10,400 to 3,600, a 65% decrease, by standardizing intake and automating ticketing workflows.
- Developed automation pipelines integrating MS Forms, Excel, Power Automate, SharePoint, and Power BI to digitize internal service requests and standardize intake processes.
- Designed a SharePoint / Teams digital workspace that centralized task management, reference material, notes, reporting links, and Power BI dashboards.
- Built Power BI dashboards for workload tracking, inbox activity, overdue tasks, service / division reporting, and quarterly management visibility.
- Collaborated with directorates to gather requirements, map current and future workflows, document decision logic, and translate needs into approved automation solutions.
- Automated task creation from Outlook and request activity, converting inbox-driven work into structured task records with Teams notifications and manager visibility.

## Portfolio Case Study Summary
Built and helped scale an internal Microsoft 365 operations platform for the Senate of Canada’s Property & Services Directorate. The project centralized scattered workflows across MS Forms, Outlook, Planner, SharePoint, Teams, Excel, Access, and Power BI into one digital workspace. Automated flows converted request and email activity into structured tickets and tasks, while Power BI dashboards gave managers visibility into workload, overdue tasks, inbox trends, and quarterly reporting. As the project progressed, I moved from Automation Developer to Automation Project Lead, leading a student development team, gathering requirements, mapping workflows, and delivering stakeholder-approved automation solutions that reduced quarterly manual email volume by approximately 65%.

## Interview Answer — SharePoint + Power BI Integration
I worked on a Microsoft 365 executive information management system where SharePoint acted as the operational hub and Power BI acted as the analytics layer. SharePoint organized task lists, service request data, reference materials, Planner links, Teams tabs, and dashboard access. Power BI connected to the underlying task, inbox, and workflow data to show workload, overdue tasks, inbox activity, and quarterly reporting metrics. The challenge was turning scattered work across Outlook, Forms, Planner, Excel, and informal tracking into a structured workflow. I helped build the automation pipelines, then later led workflow mapping and stakeholder requirements. The system reduced quarterly manual emails by about 65%.

## Interview Answer — Complex Automation Project
A strong version:

> At the Senate of Canada, I worked on an internal Microsoft 365 operations platform for the Property & Services Directorate. The problem was that tasks, service requests, and reporting data were scattered across emails, meetings, spreadsheets, Planner, and informal employee tracking. I built automation pipelines using MS Forms, Excel, Power Automate, SharePoint, and Power BI, then later led a student development team responsible for mapping workflows, documenting decision logic, and translating directorate requirements into approved automation solutions. The system standardized intake, automated ticketing, centralized task visibility in SharePoint and Teams, and surfaced reporting through Power BI dashboards. One measurable outcome was reducing quarterly manual emails from about 10,400 to 3,600, a 65% decrease.

## Short Portfolio Description
Led and developed a Microsoft 365 internal operations platform for the Senate of Canada’s Property & Services Directorate. The system connected MS Forms, Outlook, Power Automate, SharePoint, Planner, Teams, Excel, Access, and Power BI to standardize intake, automate ticketing, centralize task management, and provide management dashboards. The project reduced quarterly manual emails by approximately 65% and turned fragmented operational workflows into a structured, reportable digital workspace.

## One-Line Positioning
**A Microsoft 365 internal data product that converted scattered emails, service requests, and manual task tracking into a centralized SharePoint / Teams workspace with automated ticketing and Power BI reporting.**

## Suggested Portfolio Page Sections

### Hero
**Senate of Canada — Executive Information Management System**  
Microsoft 365 automation platform for task visibility, service request intake, and executive reporting.

### Problem
Teams were relying on meetings, emails, and individual tracking methods to manage daily work. Managers had limited visibility into task ownership, overdue work, completed tasks, and quarterly reporting data.

### Solution
Built a SharePoint / Teams workspace supported by Power Automate workflows, Planner / Lists task tracking, and Power BI dashboards.

### Impact
Reduced quarterly manual emails from approximately 10,400 to 3,600, a 65% decrease, through automated ticketing and process optimization.

### My Contribution
Started as an Automation Developer building the underlying automation and reporting pipelines; later became Automation Project Lead, leading a student development team through stakeholder discovery, workflow mapping, decision logic documentation, and solution delivery.

### Tools
MS Forms, Outlook, Power Automate, SharePoint, Microsoft Lists, Planner, Teams, Excel, Access, Power BI, DAX.

## Keywords for Portfolio Chatbot
Microsoft 365, SharePoint, Power BI, Power Automate, Microsoft Teams, Planner, Microsoft Lists, MS Forms, Outlook automation, DAX, Excel, Access, dashboarding, data pipeline, workflow automation, ticketing automation, service request intake, internal tools, task management, operational analytics, management reporting, quarterly reporting, executive dashboard, MVP, product thinking, workflow mapping, stakeholder requirements, public sector, Senate of Canada.

## How to Talk About This Project
Do not present this as only a “dashboard project.” Present it as an internal operations product:

- It had users: employees, managers, and directorates.
- It had a business problem: scattered work, unclear task ownership, manual intake, and weak reporting visibility.
- It had an intake layer: MS Forms, Outlook, and service requests.
- It had a workflow layer: Power Automate, Planner, Microsoft Lists, and SharePoint.
- It had an interface: SharePoint, Teams, Planner, Lists, notes, and wikis.
- It had an analytics layer: Power BI dashboards and quarterly reporting.
- It had automation: ticket creation, Teams notifications, and workflow routing.
- It had leadership: student team leadership, requirements gathering, workflow mapping, and stakeholder-approved delivery.
- It had measurable impact: 65% reduction in quarterly manual email volume.

Best phrasing:

> This was an internal operations data product built inside Microsoft 365. The goal was to make daily work visible, trackable, assignable, and reportable while reducing the manual email burden created by service requests and task coordination.
