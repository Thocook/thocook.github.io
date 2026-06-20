# Forecast-adaptive pricing — Trellis

## Project Name
**Forecast-adaptive pricing**  
**Organization:** Trellis  
**Role:** Product Owner, Dynamic Pricing  
**Period:** May 2025 – Present  
**Location:** Ottawa, ON  
**Project Type:** Pricing product, forecasting, marketplace operations

## Portfolio Positioning
This project should be presented as a product + data science + pricing strategy project, not simply as an algorithm. It combined econometric thinking, marketplace signals, product ownership, client management, pricing automation, and operational performance measurement.

Use this core framing:

> Built and owned a forecast-adaptive pricing engine for Amazon sellers that used pricing as a control layer to stabilize demand, improve forecast adherence, reduce reactive discounting, and improve margin performance across large product catalogs.

The strongest portfolio angle is that this project sits directly at the intersection of **data science, product management, pricing, forecasting, and marketplace operations**.

## Business Context
Large Amazon operators manage thousands of SKUs across volatile marketplaces. Even small demand shifts can create major downstream consequences: overstock, stockouts, trapped working capital, unreliable forecasts, reactive discounting, and manual intervention.

The flagship case involved **Razor Group / Infinite Commerce**, a large Amazon operator managing a **$400M+ business across 18,000+ SKUs**. The core challenge was not simply growth; it was predictability. Marketplace conditions changed faster than static forecasts and manual pricing workflows could adapt.

Portfolio framing:

> At scale, the problem was not just finding the highest possible price. The problem was keeping sales, inventory, and cash flow aligned with plan while the marketplace moved every day.

## Business Problem
The client had strong internal controls across inventory, pricing, finance, and forecasting, but Amazon marketplace volatility made execution difficult. Demand moved unevenly across the catalog: some products sold faster than expected and risked stockouts, while others lagged and accumulated excess inventory.

Key pain points:

- Forecasts became harder to trust as market conditions changed daily.
- High-velocity products risked selling through too quickly.
- Slow-moving products accumulated inventory and trapped working capital.
- Teams were pushed into reactive discounting and manual price changes.
- Manual pricing could not keep pace across thousands of SKUs.
- Broad discounting protected sales but damaged margin efficiency.
- The business needed a way to rebalance demand continuously without over-discounting.

## Guiding Principle
The guiding idea was that **predictability cannot be forecasted into existence**. Forecasts describe the expected future, but they do not keep execution aligned when marketplace conditions shift faster than planning cycles.

FAPE treated pricing as a **continuous control system** rather than a one-time revenue maximization lever.

Core principle:

> Pricing can act as an operating layer between marketplace volatility and inventory plans, correcting deviations from forecast as they emerge.

This meant using price changes to shape demand:

- Raise prices on overperforming products where demand remained strong.
- Selectively discount underperforming products to recover sales velocity.
- Keep total discounting controlled and targeted.
- Bring realized sales closer to forecast.
- Protect margin by using gains from overperformers to offset discounts on laggards.

## Solution Overview
The Forecast Adaptive Pricing Engine used live marketplace and operational signals to adjust prices daily across large Amazon catalogs. The engine was designed to bring actual sales closer to expected sales while keeping discounts controlled.

Core system components:

- **Forecast signal:** Expected sales rate / target sell-through plan.
- **Actual demand signal:** Recent sales velocity and conversion behaviour.
- **Pricing signal:** Current price, recent price changes, price bounds, and discount limits.
- **Marketplace signal:** Competitive pricing, demand elasticity, advertising behaviour, and market context.
- **Inventory signal:** Inventory position and sell-through risk.
- **Control logic:** Rules and algorithmic adjustments that determine whether to raise, hold, or lower price.
- **Performance measurement:** WMAPE, margin impact, ROI, sales-to-plan, and discount efficiency.

Simple workflow:

> Forecast / Plan → Marketplace Signals → Pricing Algorithm → Daily Price Updates → Sales Response → Forecast Adherence + Margin Measurement

## Algorithmic / Product Logic
The engine was designed to make pricing decisions based on whether products were selling ahead of, behind, or close to plan.

### Overperforming Products
Products selling faster than expected could be underpriced relative to demand. The engine could raise prices to capture margin while still maintaining sales velocity.

Portfolio framing:

> Identified overperforming SKUs where price increases could create incremental margin without sacrificing forecast adherence.

### Underperforming Products
Products selling slower than expected could receive targeted discounting to restore velocity and reduce excess inventory risk.

Portfolio framing:

> Used selective price reductions to recover demand on lagging SKUs while avoiding broad, inefficient discounting across the catalog.

### On-Plan Products
Products selling close to expected pace could remain stable, avoiding unnecessary price movement.

Portfolio framing:

> Preserved price stability when sales were tracking to plan, reducing noise and unnecessary interventions.

### Portfolio-Level Thinking
The key idea was not SKU-by-SKU discounting in isolation. It was catalog-level balancing.

Useful wording:

> The engine treated the catalog like a portfolio: margin could be gained from overperformers, selectively spent on underperformers, and managed so total demand stayed closer to plan.

## My Role
As Product Owner for pricing and promotions at Trellis, I served as both the product lead and algorithm owner for the pricing engine.

Responsibilities included:

- Wrote and developed the pricing algorithm logic.
- Owned pricing and promotions product direction.
- Defined algorithm behaviour, decision rules, and product requirements.
- Worked with engineering to translate pricing logic into product features.
- Managed key client relationships and adoption.
- Led client-facing analysis and performance reviews.
- Helped launch new pricing features and communicate the product value.
- Connected the algorithmic work to business outcomes such as WMAPE, margin, ROI, and forecast adherence.
- Positioned pricing as a demand-control layer for large Amazon operators.

Strong version:

> As Product Owner for Trellis pricing and promotions, I wrote the algorithm logic for a Forecast Adaptive Pricing Engine and helped bring it to market with a major Amazon operator. I translated business problems around forecast accuracy, inventory drift, and reactive discounting into product requirements, pricing logic, client-facing analysis, and adoption workflows. The engine used pricing as a control layer to rebalance demand across thousands of SKUs and improve predictability, margin, and forecast adherence.

Short version:

> Wrote and owned a forecast-adaptive pricing algorithm for Trellis, using daily marketplace signals to rebalance Amazon demand, improve forecast adherence, and reduce reactive discounting across large SKU catalogs.

## Impact
The flagship Trellis x Razor Group / Infinite Commerce case produced strong measurable results:

- **18x estimated ROI** on discount efficiency.
- **4.5% margin improvement / less discount required** versus manual pricing.
- **12% WMAPE improvement**, with weighted forecast error declining from approximately **48% to 36%**.
- Forecasts became more usable as operational inputs rather than directional estimates.
- Sales moved closer to plan.
- Inventory aligned closer to expected sell-through.
- Pricing interventions became more controlled and systematic.
- Manual pricing effort and operational noise were reduced.
- Discounting shifted from broad/reactive to targeted/portfolio-aware.

Portfolio framing:

> The engine improved WMAPE by 12%, delivered an estimated 18x ROI on discount efficiency, and improved margin by approximately 4.5% by replacing manual reactive pricing with systematic demand shaping.

## Key Metrics

### WMAPE
Weighted Mean Absolute Percentage Error was used to measure forecast adherence at scale. This was important because the business cared less about whether individual SKUs missed by small percentages and more about whether the total weighted business stayed aligned with plan.

How to explain it:

> WMAPE measured how far realized sales deviated from forecast, weighted by business importance. Improving WMAPE meant the pricing system made forecasts more operationally useful.

Interview version:

> I used WMAPE because the goal was not just sales growth; it was forecast adherence. In a large Amazon catalog, missing forecast on high-volume SKUs matters more than missing on small SKUs. WMAPE gave us a weighted view of whether pricing was helping the business sell closer to plan.

### Margin Impact
Margin impact measured whether pricing decisions improved profitability or required discounting. The system aimed to offset selective discounts on underperforming SKUs with price increases on overperforming SKUs.

### ROI
ROI was measured through discount efficiency: how much better the system performed compared with manual pricing and broad discounting.

### Sales-to-Plan
Sales-to-plan measured whether realized unit sales moved closer to expected sell-through.

## Product Features / Capabilities

### 1. Forecast-Adaptive Pricing Logic
Designed price movement around deviation from forecast instead of simple revenue maximization.

Portfolio framing:

> Built pricing logic that reacted to whether products were selling ahead of, behind, or on plan.

### 2. Daily Price Adjustment Layer
Enabled prices to respond daily to marketplace conditions instead of relying on manual review cycles.

Portfolio framing:

> Turned pricing into a continuous adjustment layer that could respond faster than manual operating cycles.

### 3. Demand Rebalancing
Used price changes to stabilize uneven demand across a catalog.

Portfolio framing:

> Used pricing to rebalance demand across overperforming, on-plan, and underperforming products.

### 4. Controlled Discounting
Kept discounting targeted and bounded rather than broad and reactive.

Portfolio framing:

> Improved discount efficiency by applying price pressure only where it was needed.

### 5. Portfolio-Level Margin Management
Used gains from overperformers to offset selective discounts on laggards.

Portfolio framing:

> Managed margin at the portfolio level instead of treating each SKU as an isolated pricing decision.

### 6. Client-Facing Analytics
Built and communicated analysis around WMAPE, margin impact, ROI, forecast adherence, and operational stability.

Portfolio framing:

> Translated algorithm performance into executive-level metrics that clients could understand and act on.

## Product Management Work
This project should strongly show product ownership, not just analytics.

Product work included:

- Defining product requirements for pricing and promotions.
- Translating client pain points into algorithmic behaviour.
- Writing and refining the algorithm logic.
- Prioritizing features and roadmap needs.
- Working with engineering on implementation constraints.
- Creating client-facing narratives and analysis.
- Managing adoption with large Amazon operators.
- Explaining model behaviour to non-technical stakeholders.
- Monitoring performance and iterating based on outcomes.

Useful framing:

> I owned the bridge between client operations, pricing theory, algorithm logic, and product execution.

## Data Science / Analytics Work
This project also demonstrates applied data science and quantitative reasoning.

Analytics work included:

- Forecast error measurement using WMAPE.
- Sales velocity analysis.
- Margin impact analysis.
- Discount efficiency analysis.
- SKU segmentation by performance versus plan.
- Signal design for overperformance / underperformance.
- Evaluation of pricing interventions.
- Portfolio-level measurement across thousands of SKUs.

Useful framing:

> The technical challenge was not only building a pricing rule; it was designing a measurable control system where price changes could be evaluated against forecast adherence, margin, and demand stability.

## Suggested Portfolio Page Sections

### Hero
**Trellis — Forecast Adaptive Pricing Engine**  
Pricing algorithm and product system that used daily Amazon marketplace signals to stabilize demand, improve forecast adherence, and reduce reactive discounting.

### Problem
Amazon demand changes faster than planning cycles. For large operators, small SKU-level demand shifts create stockouts, excess inventory, unreliable forecasts, trapped cash, and reactive discounting.

### Solution
Built a forecast-adaptive pricing engine that treated pricing as a control layer. The engine adjusted prices based on forecast deviation, marketplace conditions, inventory position, and sales trends to bring realized sales closer to plan.

### Impact
Delivered an estimated 18x ROI, improved margin by approximately 4.5%, and improved WMAPE by 12% in a large-scale Amazon operator case involving a $400M+ business and 18,000+ SKUs.

### My Contribution
Served as Product Owner for pricing and promotions. Wrote the algorithm logic, defined product requirements, worked with engineering, managed client relationships, led analysis, and translated pricing performance into client-facing business outcomes.

### Tools / Concepts
Pricing algorithms, Amazon marketplace data, forecasting, WMAPE, sales velocity, margin analysis, ROI analysis, SKU-level analytics, product ownership, roadmap planning, client management, pricing strategy, demand shaping.

## Strong Resume Bullets

- Wrote and owned a forecast-adaptive pricing algorithm for Trellis, using daily Amazon marketplace signals to rebalance demand across large SKU catalogs.
- Served as Product Owner for pricing and promotions, defining algorithm logic, product requirements, roadmap priorities, and client adoption workflows.
- Helped deliver an estimated **18x ROI**, **4.5% margin improvement**, and **12% WMAPE improvement** for a $400M+ Amazon operator managing 18,000+ SKUs.
- Used pricing as a control layer to improve forecast adherence, reduce reactive discounting, and stabilize inventory sell-through across overperforming and underperforming products.
- Managed key client relationships and translated pricing performance into executive-facing analysis around WMAPE, margin impact, ROI, and operational predictability.
- Partnered with engineering to launch pricing and promotions features that automated manual pricing workflows and improved adoption across Amazon sellers.
- Designed catalog-level pricing logic that selectively raised prices on overperforming SKUs and discounted lagging SKUs to bring realized sales closer to plan.

## Portfolio Case Study Summary
Built and owned the algorithmic logic for Trellis’s Forecast Adaptive Pricing Engine, a pricing product designed for large Amazon sellers. The system treated pricing as a continuous control layer between marketplace volatility and inventory plans. Instead of using pricing only to maximize revenue, the engine adjusted prices to bring sales closer to forecast: raising prices on overperforming SKUs, selectively discounting underperforming SKUs, and holding stable where products were on plan. In a major Razor Group / Infinite Commerce case, the approach helped a $400M+ Amazon operator managing 18,000+ SKUs improve WMAPE by 12%, improve margin by approximately 4.5%, and achieve an estimated 18x ROI on discount efficiency.

## Short Portfolio Description
Wrote and owned the algorithmic logic for a forecast-adaptive pricing engine at Trellis. The product used Amazon marketplace signals, forecast deviation, sales velocity, pricing limits, and inventory context to adjust prices daily and stabilize demand across large SKU catalogs. In a major Razor Group / Infinite Commerce case, the engine improved WMAPE by 12%, improved margin by roughly 4.5%, and delivered an estimated 18x ROI by replacing reactive manual discounting with systematic demand shaping.

## One-Line Positioning
**A pricing algorithm and product system that turned Amazon price changes into a demand-control layer for forecast adherence, margin protection, and operational predictability.**

## Interview Answer — Product Owner Project
A strong version:

> At Trellis, I served as Product Owner for pricing and promotions and wrote the algorithm logic behind a Forecast Adaptive Pricing Engine. The problem was that large Amazon sellers could forecast demand, but they could not keep execution aligned when marketplace conditions changed daily. I designed the pricing logic around forecast deviation: raising prices on overperforming SKUs, selectively discounting underperforming SKUs, and holding stable when products were tracking to plan. I worked with engineering on implementation, managed client adoption, and led analysis around WMAPE, margin, and ROI. In a major case with a $400M+ Amazon operator managing 18,000+ SKUs, the engine improved WMAPE by 12%, improved margin by about 4.5%, and delivered an estimated 18x ROI.

## Interview Answer — Metric I Defined / Used
A concise version:

> The key metric was WMAPE, or weighted forecast error. For pricing, the goal was not just to increase sales; it was to make sales more predictable against plan. WMAPE let us measure whether price changes were bringing realized sales closer to forecast, weighted by the SKUs that mattered most. As we optimized around that, forecast error improved from roughly 48% to 36%, making forecasts more useful for inventory and cash-flow decisions.

## How to Talk About This Project
Do not present this as just “dynamic pricing.” Present it as a pricing data product and control system:

- It had users: Amazon operators, pricing teams, finance teams, inventory planners, and client stakeholders.
- It had a business problem: volatile demand, unreliable forecasts, stockout risk, overstock risk, and reactive discounting.
- It had a decision layer: algorithmic price increases, holds, and decreases.
- It had data signals: sales velocity, forecast deviation, inventory position, competitor pricing, elasticity, advertising behaviour, and price bounds.
- It had a product layer: pricing and promotions features, client adoption, roadmap work, and explainability.
- It had a measurement layer: WMAPE, margin impact, ROI, discount efficiency, and sales-to-plan.
- It had measurable impact: 18x ROI, 4.5% margin improvement, and 12% WMAPE improvement.

Best phrasing:

> This was a pricing control system. The goal was to use price changes to absorb marketplace volatility before it turned into inventory problems, cash-flow problems, and reactive discounting.

## Skills Demonstrated

### Product Management
- Product ownership.
- Roadmap planning.
- Feature definition.
- Algorithm requirement writing.
- Engineering collaboration.
- Client adoption.
- Stakeholder communication.
- Product positioning.
- Performance storytelling.

### Data Science / Analytics
- Forecast error measurement.
- WMAPE.
- Sales velocity analysis.
- Pricing signal design.
- Margin impact analysis.
- ROI analysis.
- SKU segmentation.
- Portfolio-level measurement.
- Marketplace analytics.

### Pricing / Economics
- Dynamic pricing.
- Demand shaping.
- Price elasticity.
- Discount efficiency.
- Margin protection.
- Inventory-aware pricing.
- Competitive pricing.
- Forecast-adaptive control.
- Portfolio pricing.

### E-Commerce / Amazon
- Amazon marketplace dynamics.
- SKU-level catalog management.
- Sales velocity.
- Inventory sell-through.
- Advertising and pricing interaction.
- Large-catalog operations.
- Client-facing marketplace strategy.

## Keywords for Portfolio Chatbot
Trellis, Forecast Adaptive Pricing Engine, FAPE, dynamic pricing, Amazon pricing, product owner, pricing product manager, pricing algorithm, forecast adherence, WMAPE, weighted forecast error, sales velocity, demand shaping, margin optimization, ROI, discount efficiency, inventory alignment, Amazon marketplace, Razor Group, Infinite Commerce, 18,000 SKUs, $400M Amazon operator, pricing control system, product management, pricing and promotions, marketplace analytics, e-commerce analytics, SKU-level analytics, pricing automation, client adoption, algorithmic pricing, forecast adaptive pricing.
