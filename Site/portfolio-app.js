let state = {
      openTheme: "algorithms",
      projectId: "trellis-fape",
      tab: "overview"
    };

    const parseMonth = (value) => {
      const [year, month] = value.split("-").map(Number);
      return year * 12 + (month - 1);
    };

    const startMonth = parseMonth("2020-10");
    const endMonth = parseMonth("2026-06");
    const totalMonths = endMonth - startMonth;

    function monthToPct(value) {
      const m = parseMonth(value);
      return Math.max(0, Math.min(100, ((m - startMonth) / totalMonths) * 100));
    }

    function initTimeline() {
      const axis = document.getElementById("timeline-axis");
      const lanes = document.getElementById("timeline-lanes");
      if (!axis || !lanes) return;

      for (let year = 2021; year <= 2026; year++) {
        const el = document.createElement("span");
        el.className = "year";
        el.style.left = monthToPct(`${year}-01`) + "%";
        el.textContent = year;
        axis.appendChild(el);
      }

      jobs.forEach(job => {
        const lane = document.createElement("div");
        lane.className = "lane";

        const label = document.createElement("div");
        label.className = "lane-label";
        label.innerHTML = `${job.label} <span>- ${job.industry}</span>`;

        const track = document.createElement("div");
        track.className = "lane-track";

        const bar = document.createElement("div");
        bar.className = "job-bar";
        bar.dataset.jobId = job.id;
        bar.style.left = monthToPct(job.start) + "%";
        bar.style.width = Math.max(2, monthToPct(job.end) - monthToPct(job.start)) + "%";
        bar.title = `${job.label} - ${job.industry}`;
        bar.addEventListener("click", () => {
          const project = projects.find(p => p.roleId === job.id);
          if (project) {
            state.projectId = project.id;
            state.openTheme = project.themes[0];
            state.tab = "overview";
            renderAll();
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }
        });

        track.appendChild(bar);

        projects.filter(project => project.roleId === job.id).forEach(project => {
          const dot = document.createElement("div");
          dot.className = "project-dot";
          dot.dataset.projectId = project.id;
          dot.style.left = monthToPct(project.date) + "%";
          dot.addEventListener("click", () => {
            state.projectId = project.id;
            state.openTheme = project.themes[0];
            state.tab = "overview";
            renderAll();
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          });
          dot.addEventListener("mouseenter", event => showTooltip(event, project.title));
          dot.addEventListener("mousemove", event => showTooltip(event, project.title));
          dot.addEventListener("mouseleave", hideTooltip);
          track.appendChild(dot);
        });

        lane.appendChild(label);
        lane.appendChild(track);
        lanes.appendChild(lane);
      });
    }

    function showTooltip(event, text) {
      const tooltip = document.getElementById("tooltip");
      tooltip.style.display = "block";
      tooltip.textContent = text;
      tooltip.style.left = event.pageX + 14 + "px";
      tooltip.style.top = event.pageY - 8 + "px";
    }

    function hideTooltip() {
      document.getElementById("tooltip").style.display = "none";
    }

    function bindCareerMap() {
      document.querySelectorAll(".career-bar[data-job-id]").forEach(bar => {
        bar.addEventListener("click", event => {
          if (event.target.closest(".career-node")) return;
          const project = projects.find(p => p.roleId === bar.dataset.jobId);
          if (project) {
            state.projectId = project.id;
            state.openTheme = project.themes[0];
            state.tab = "overview";
            renderAll();
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      document.querySelectorAll(".career-node[data-project-id]").forEach(node => {
        const project = projects.find(p => p.id === node.dataset.projectId);
        if (!project) return;

        node.setAttribute("role", "button");
        node.setAttribute("tabindex", "0");
        node.setAttribute("aria-label", `Open ${project.title}`);

        const openProject = () => {
          state.projectId = project.id;
          state.openTheme = project.themes[0];
          state.tab = "overview";
          renderAll();
          document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        };

        node.addEventListener("click", event => {
          event.stopPropagation();
          openProject();
        });
        node.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
          }
        });
        node.addEventListener("mouseenter", event => showTooltip(event, project.title));
        node.addEventListener("mousemove", event => showTooltip(event, project.title));
        node.addEventListener("mouseleave", hideTooltip);
      });
    }

    function openProjectFromLink(projectId) {
      const project = projects.find(p => p.id === projectId);
      if (!project) return;
      state.projectId = project.id;
      state.openTheme = project.themes[0];
      state.tab = "overview";
      renderAll();
      window.requestAnimationFrame(() => {
        document.getElementById("showcase-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    function bindOverviewProjectLinks() {
      document.querySelectorAll("[data-project-link]").forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          event.stopPropagation();
          openProjectFromLink(link.dataset.projectLink);
        });
      });
    }

    function bindProjectOverviewCarousel() {
      const track = document.querySelector(".project-overview-track");
      if (!track) return;

      let momentumFrame = 0;

      const cardsByPosition = () => Array.from(track.querySelectorAll(".overview-project-card"))
        .sort((a, b) => a.offsetLeft - b.offsetLeft);

      const cardTargetLeft = card => card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;

      const nearestCard = () => {
        const cards = cardsByPosition();
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        return cards.reduce((closest, card) => {
          const distance = Math.abs((card.offsetLeft + card.offsetWidth / 2) - trackCenter);
          return distance < closest.distance ? { card, distance } : closest;
        }, { card: cards[0], distance: Infinity }).card;
      };

      const snapToCard = card => {
        if (!card) return;
        track.scrollTo({ left: cardTargetLeft(card), behavior: "smooth" });
      };

      const scrollToCard = (direction = 0) => {
        window.cancelAnimationFrame(momentumFrame);
        const cards = cardsByPosition();
        if (!cards.length) return;

        const currentIndex = Math.max(0, cards.indexOf(nearestCard()));
        const nextIndex = (currentIndex + direction + cards.length) % cards.length;
        snapToCard(cards[nextIndex]);
      };

      document.querySelector(".overview-carousel-button.prev")?.addEventListener("click", () => scrollToCard(-1));
      document.querySelector(".overview-carousel-button.next")?.addEventListener("click", () => scrollToCard(1));

      let isDragging = false;
      let didDrag = false;
      let dragStartX = 0;
      let dragStartScroll = 0;
      let lastX = 0;
      let lastTime = 0;
      let velocity = 0;
      let suppressClickUntil = 0;

      track.addEventListener("pointerdown", event => {
        if (event.button !== 0) return;
        if (event.target.closest("a, button")) return;
        window.cancelAnimationFrame(momentumFrame);
        isDragging = true;
        didDrag = false;
        dragStartX = event.clientX;
        lastX = event.clientX;
        lastTime = performance.now();
        velocity = 0;
        dragStartScroll = track.scrollLeft;
        track.setPointerCapture(event.pointerId);
      });

      track.addEventListener("pointermove", event => {
        if (!isDragging) return;
        const dx = event.clientX - dragStartX;
        const now = performance.now();
        const dt = Math.max(16, now - lastTime);
        velocity = (lastX - event.clientX) / dt;
        lastX = event.clientX;
        lastTime = now;
        if (Math.abs(dx) > 4) {
          didDrag = true;
          track.classList.add("dragging");
          event.preventDefault();
        }
        track.scrollLeft = dragStartScroll - dx;
      });

      const endDrag = event => {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove("dragging");
        if (track.hasPointerCapture(event.pointerId)) {
          track.releasePointerCapture(event.pointerId);
        }
        if (!didDrag) return;
        suppressClickUntil = performance.now() + 350;

        let speed = velocity * 18;
        const glide = () => {
          speed *= 0.88;
          track.scrollLeft += speed;
          if (Math.abs(speed) > 0.25) {
            momentumFrame = window.requestAnimationFrame(glide);
          } else {
            snapToCard(nearestCard());
          }
        };
        momentumFrame = window.requestAnimationFrame(glide);
      };

      track.addEventListener("pointerup", endDrag);
      track.addEventListener("pointercancel", endDrag);
      track.addEventListener("lostpointercapture", () => {
        isDragging = false;
        track.classList.remove("dragging");
      });

      track.addEventListener("click", event => {
        if (performance.now() > suppressClickUntil) return;
        event.preventDefault();
        event.stopPropagation();
      }, true);

      window.setTimeout(() => {
        snapToCard(track.querySelector('[data-overview-project="trellis-fape"]'));
      }, 0);
    }

    function renderFilters() {
      const themeWrap = document.getElementById("theme-filters");

      themeWrap.querySelectorAll("button, .theme-projects").forEach(el => el.remove());

      themes.forEach(theme => {
        const btn = document.createElement("button");
        btn.className = "filter-button theme-button" + (state.openTheme === theme.id ? " active" : "");
        btn.textContent = theme.label;
        btn.addEventListener("click", () => {
          state.openTheme = state.openTheme === theme.id ? "" : theme.id;
          renderFilters();
        });
        themeWrap.appendChild(btn);

        const projectWrap = document.createElement("div");
        projectWrap.className = "theme-projects" + (state.openTheme === theme.id ? " open" : "");

        getThemeProjects(theme.id).forEach(project => {
          const projectBtn = document.createElement("button");
          projectBtn.className = "project-row" + (project.id === state.projectId ? " active" : "");
          projectBtn.innerHTML = `
            <span class="row-year">${project.year || project.dates}</span>
            <span class="row-title">${project.shortTitle || project.title}</span>
            <span class="row-meta">${project.company}</span>
          `;
          projectBtn.addEventListener("click", () => {
            state.openTheme = theme.id;
            state.projectId = project.id;
            state.tab = "overview";
            renderAll();
          });
          projectWrap.appendChild(projectBtn);
        });

        themeWrap.appendChild(projectWrap);
      });
    }

    function getThemeProjects(themeId) {
      return projects.filter(project => project.themes.includes(themeId));
    }

    function renderShowcase() {
      const project = projects.find(p => p.id === state.projectId) || projects[0];
      const tab = project.tabs[state.tab] || project.tabs.overview;
      const nodes = project.visual || ["DATA", "OPS", "BI"];

      const tabs = document.getElementById("showcase-tabs");
      tabs.innerHTML = "";
      [["overview", project.tabs.overview], ["architecture", project.tabs.architecture], ["future", project.tabs.future]].forEach(([key, value]) => {
        const btn = document.createElement("button");
        btn.className = "tab-button" + (state.tab === key ? " active" : "");
        btn.textContent = value.label;
        btn.addEventListener("click", () => {
          state.tab = key;
          renderShowcase();
        });
        tabs.appendChild(btn);
      });

      if (project.id === "senate-eims") {
        renderSenateShowcase(project, tab);
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "la-cite") {
        renderLaCiteShowcase(project, tab);
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "quant-trading") {
        renderTradingShowcase(project, tab);
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "moovez-growth") {
        renderMoovezShowcase(project, tab);
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "trellis-revops") {
        renderLookerShowcase(project, tab);
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "trellis-fape" && state.tab === "overview") {
        document.getElementById("showcase-content").innerHTML = `
          <div class="fape-case fape-overview">
            <div class="fape-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>FAPE</h2>
              </div>
              <span>Forecast-Adaptive Pricing Engine</span>
            </div>
            <div class="fape-overview-grid">
              <section class="project-page-intro fape-intro">
                <div class="project-page-intro__heading">
                  <div>
                    <p class="showcase-kicker">Overview</p>
                    <h3>Pricing for predictability.</h3>
                  </div>
                  <span>${project.company} - ${project.year}</span>
                </div>
                <p>Built pricing logic for a major Amazon operator where forecasts, SKU performance, inventory risk, and margin pressure had to move together. The problem was not just changing prices faster; it was making catalog decisions predictable enough for operators to trust. The solution used forecast variance, product performance, and controlled price actions to identify where pricing should protect margin, recover demand, or stay stable.</p>
                <div class="project-tech-row" aria-label="Technology and concepts used">
                  ${["Amazon Data", "Python", "Postgres", "Django"].map(techChipHtml).join("")}
                </div>
                ${overviewMetricCardsHtml([
                  ["12%", "WMAPE improvement"],
                  ["4.5%", "Improved margin"],
                  ["18x", "Estimated discount ROI"]
                ])}
                <ul class="project-intro-notes">
                  <li>Used pricing as a control layer to hit inventory needs.</li>
                  <li>Kept changes within budget tolerance across the catalog.</li>
                  <li>Translated pricing logic into client-facing product decisions.</li>
                </ul>
              </section>
              <a class="case-file-link fape-download-link fape-overview-download" href="../Trellis%20%20Forecast%20Adaptive%20pricing%20Engine%20(10)%20(1).pdf" target="_blank" rel="noreferrer">Download case study</a>
            </div>
          </div>
        `;
        renderActiveTimeline(project);
        return;
      }

      if (project.id === "trellis-fape" && state.tab === "architecture") {
        document.getElementById("showcase-content").innerHTML = `
          <div class="fape-case fape-architecture">
            ${architecturePageHtml({
              title: "Decision matrix of price changes",
              body: "The architecture treated pricing as a decision matrix rather than a one-size-fits-all discounting rule. Each SKU was compared against forecast position, demand direction, margin pressure, and operating constraints before a price action was recommended. The design made the system easier to explain because every output mapped back to a business state: protect margin when demand is strong, recover velocity when demand is weak, and leave stable SKUs alone when the plan is already working.",
              graphic: `
                ${fapeArchitectureFlowHtml()}
                <div class="fape-matrix-table" aria-label="Pricing decision matrix">
                  <div></div>
                  <div class="matrix-head">Trellis demand up signal</div>
                  <div class="matrix-head">Trellis demand down signal</div>
                  <div class="matrix-side">Above forecast</div>
                  <div class="matrix-action">
                    <span class="price-icon up">${lucideIcon("trendUp")}</span>
                    <strong>Increase price</strong>
                    <small>Capture margin while demand is strong.</small>
                  </div>
                  <div class="matrix-action split">
                    <span class="price-icon hold-up">${lucideIcon("moveUpRight")}</span>
                    <i></i>
                    <strong>Hold or slight increase</strong>
                    <small>Avoid overcorrecting if signal weakens.</small>
                  </div>
                  <div class="matrix-side">Below forecast</div>
                  <div class="matrix-action split">
                    <span class="price-icon hold-down">${lucideIcon("moveDownRight")}</span>
                    <i></i>
                    <strong>Hold or selective discount</strong>
                    <small>Recover demand only if budget supports it.</small>
                  </div>
                  <div class="matrix-action">
                    <span class="price-icon down">${lucideIcon("trendDown")}</span>
                    <strong>Reduce price</strong>
                    <small>Use targeted discounting to restore velocity.</small>
                  </div>
                </div>
              `,
              tools: [
                ["Amazon Data", "SKU, catalog, plan, and demand data gave the model the operating context for each pricing decision."],
                ["Python", "Python handled rule logic, forecast comparison, grid search, and repeatable pricing calculations."],
                ["Postgres", "Postgres acted as the structured data layer for SKU records, pricing inputs, and output tables."],
                ["Django", "Django supported product-facing workflows so pricing logic could become usable software."]
              ]
            })}
          </div>
        `;
        renderActiveTimeline(project);
        return;
      }

      if (state.tab === "future") {
        document.getElementById("showcase-content").innerHTML = futureImprovementsHtml(tab);
        renderActiveTimeline(project);
        return;
      }

      const metricHtml = tab.metrics ? `
        <div class="metric-grid">
          ${tab.metrics.map(([value, label]) => `
            <div class="metric-card">
              <span class="metric-value">${value}</span>
              <span class="metric-label">${label}</span>
            </div>
          `).join("")}
        </div>
      ` : "";

      const bulletHtml = tab.bullets ? `
        <ul class="bullet-list">
          ${tab.bullets.map(item => `<li>${item}</li>`).join("")}
        </ul>
      ` : "";

      const architectureHtml = state.tab === "architecture" ? `
        <div class="architecture-panel">
          <div class="case-visual" aria-hidden="true">
            <div class="visual-line"></div>
            <div class="visual-node one">${nodes[0]}</div>
            <div class="visual-node two">${nodes[1]}</div>
            <div class="visual-node three">${nodes[2]}</div>
            <div class="visual-label">${project.visualLabel || ""}</div>
          </div>
          <div class="tool-category-grid">
            ${(project.tools || []).map(([category, tools]) => `
              <div class="tool-category">
                <strong>${category}</strong>
                ${tools.map(tool => `<span>${tool}</span>`).join("")}
              </div>
            `).join("")}
          </div>
        </div>
      ` : "";

      const overviewHeaderHtml = state.tab === "overview" ? `
        <div class="showcase-header in-content">
          <div>
            <p class="showcase-kicker">${project.company} - ${project.year || project.dates}</p>
            <h2>${project.title}</h2>
            <p class="showcase-role">${project.role}</p>
            <div class="tag-list">
              ${project.tags.map(tag => `<span class="chip">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="case-visual" aria-hidden="true">
            <div class="visual-line"></div>
            <div class="visual-node one">${nodes[0]}</div>
            <div class="visual-node two">${nodes[1]}</div>
            <div class="visual-node three">${nodes[2]}</div>
            <div class="visual-label">${project.visualLabel || ""}</div>
          </div>
        </div>
      ` : "";

      document.getElementById("showcase-content").innerHTML = `
        ${overviewHeaderHtml}
        <h3>${tab.headline}</h3>
        <p>${tab.body}</p>
        ${metricHtml}
        ${architectureHtml}
        ${bulletHtml}
      `;

      document.querySelectorAll(".project-dot").forEach(dot => {
        dot.classList.toggle("active", dot.dataset.projectId === project.id);
      });

      document.querySelectorAll(".job-bar").forEach(bar => {
        bar.classList.toggle("active", bar.dataset.jobId === project.roleId);
      });

      document.querySelectorAll(".career-node[data-project-id]").forEach(node => {
        node.classList.toggle("active", node.dataset.projectId === project.id);
      });

      document.querySelectorAll(".career-bar[data-job-id]").forEach(bar => {
        bar.classList.toggle("active", bar.dataset.jobId === project.roleId);
      });
    }

    const toolIconMap = {
      "Access": "../Tools/excel.png",
      "Amazon Ads": "../Tools/AmazonAds.png",
      "Amazon Data": "../Tools/Amazon.png",
      "Bing Ads": "../Tools/Bingads.png",
      "Calendly": "../Tools/zapier.png",
      "ChatGPT": "../Tools/ChatGpt.png",
      "Claude": "../Tools/Claude.png",
      "Excel": "../Tools/excel.png",
      "Facebook Ads": "../Tools/Meta.png",
      "Forms": "../Tools/sharepoint.png",
      "GA4": "../Tools/Ga4.png",
      "Google Ads": "../Tools/adwords.png",
      "HubSpot": "../Tools/hubspot.png",
      "Klaviyo": "../Tools/klaviyo-logo.png",
      "LinkedIn Ads": "../Tools/LinkedIn_icon.svg.png",
      "Looker": "../Tools/Looker.png",
      "Meta": "../Tools/Meta.png",
      "Outlook": "../Tools/sharepoint.png",
      "Pine Script": "../Tools/Pinescript.png",
      "Pipedrive": "../Tools/pipedrive.png",
      "Planner": "../Tools/planner.png",
      "Postgres": "../Tools/postgres.png",
      "Power Automate": "../Tools/PowerAutomate.png",
      "Power BI": "../Tools/PowerBi.png",
      "Python": "../Tools/python.png",
      "SEMrush": "../Tools/semrush-icon.webp",
      "SharePoint": "../Tools/sharepoint.png",
      "Tableau": "../Tools/free-tableau-icon-svg-download-png-4489897.png",
      "Teams": "../Tools/sharepoint.png",
      "TradingView": "../Tools/Pinescript.png",
      "Webflow": "../Tools/webflow.svg",
      "WordPress": "../Tools/wordpress.png",
      "Zapier": "../Tools/zapier.png"
    };

    function techChipHtml(label) {
      const icon = toolIconMap[label] || "../Tools/github.png";
      return `
        <span class="tool-chip project-tech-chip">
          <span class="tool-icon"><img src="${icon}" alt="" /></span>${label}
        </span>
      `;
    }

    function overviewMetricCardsHtml(metrics = []) {
      if (!metrics.length) return "";
      return `
        <div class="overview-card-metrics project-intro-metrics${metrics.length === 1 ? " single" : ""}" aria-label="Key metrics">
          ${metrics.map(([value, label]) => `
            <div class="overview-card-metric">
              <strong>${value}</strong>
              <span>${label}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    function projectPageIntroHtml({ kicker, title, meta, body, notes = [], tech = [], metrics = [], projectId = "" }) {
      return `
        <section class="project-page-intro">
          <div class="project-page-intro__heading">
            <div>
              <p class="showcase-kicker">${kicker}</p>
              <h3>${title}</h3>
            </div>
            ${meta ? `<span>${meta}</span>` : ""}
          </div>
          <p>${body}</p>
          ${tech.length ? `
            <div class="project-tech-row" aria-label="Technology used">
              ${tech.map(techChipHtml).join("")}
            </div>
          ` : ""}
          ${overviewMetricCardsHtml(metrics)}
          ${notes.length ? `
            <ul class="project-intro-notes">
              ${notes.map(note => `<li>${note}</li>`).join("")}
            </ul>
          ` : ""}
        </section>
      `;
    }

    function architectureToolRowsHtml(rows = []) {
      return `
        <div class="architecture-tool-rows" aria-label="How each tool was used">
          ${rows.map(([tool, text]) => `
            <article class="architecture-tool-row">
              ${techChipHtml(tool)}
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      `;
    }

    function architecturePageHtml({ title, body, graphic, tools }) {
      return `
        <section class="architecture-standard">
          ${projectPageIntroHtml({
            kicker: "Architecture",
            title,
            body
          })}
          <section class="architecture-main-graphic" aria-label="Core architecture graphic">
            ${graphic}
          </section>
          ${architectureToolRowsHtml(tools)}
        </section>
      `;
    }

    function renderSenateShowcase(project, tab) {
      const content = document.getElementById("showcase-content");

      if (state.tab === "overview") {
        content.innerHTML = `
          <div class="senate-case senate-overview">
            <div class="senate-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>Power BI & Automation</h2>
              </div>
              <span>Executive information management system</span>
            </div>

            ${projectPageIntroHtml({
                kicker: "Overview",
                title: "From scattered operations to structured reporting.",
                meta: `${project.company} - ${project.year}`,
                body: "Built and helped scale a Microsoft 365 operations platform for a public-sector office where daily work was spread across inboxes, forms, Planner tasks, and manual reporting files. The goal was to reduce invisible work and make operational status easier for managers to review. The solution converted scattered activity into SharePoint / Teams workflows, Power Automate routing, and Power BI dashboards for workload visibility and quarterly reporting.",
                tech: ["Power BI", "Power Automate", "SharePoint", "Planner"],
                metrics: [
                  ["65%", "Email volume reduction"],
                  ["6,800", "Quarterly manual emails reduced"],
                  ["M365", "Reusable reporting system"]
                ],
                notes: [
                  "Turned inbox activity, forms, and Planner tasks into structured operational records.",
                  "Used automation to reduce manual handoffs and make ownership easier to track.",
                  "Connected the workspace to Power BI so managers could review workload and reporting status."
                ],
                projectId: project.id
              })}
          </div>
        `;
        return;
      }

      if (state.tab === "architecture") {
        content.innerHTML = `
          <div class="senate-case senate-architecture">
            ${architecturePageHtml({
              title: "Microsoft 365 arranged like an operating system.",
              body: "The architecture turned Microsoft 365 from a collection of separate tools into a connected operating layer for the office. Teams handled collaboration, SharePoint acted as the shared workspace, Planner and Lists captured task records, Power Automate routed events and notifications, and Power BI converted the activity into management reporting. The purpose was to reduce manual status chasing and give managers a cleaner view of workload, ownership, overdue work, and quarterly reporting inputs.",
              graphic: `
                ${senateArchitecturePipelineHtml()}
              `,
              tools: [
                ["Power BI", "Power BI turned inbox, task, and workflow activity into management views and quarterly reporting."],
                ["Power Automate", "Power Automate routed requests, notifications, and task events into structured workflows."],
                ["SharePoint", "SharePoint acted as the hub for reference material, structured records, and reporting resources."],
                ["Planner", "Planner captured task ownership, due dates, status, and handoffs for operational visibility."]
              ]
            })}
          </div>
        `;
        return;
      }

      content.innerHTML = `
        ${futureImprovementsHtml(tab)}
      `;
    }

    function senateWorkspaceItem(code, title, text) {
      return `
        <div class="senate-team-item">
          <i>${code}</i>
          <div>
            <strong>${title}</strong>
            <span>${text}</span>
          </div>
        </div>
      `;
    }

    function senatePipelineHtml() {
      const steps = [
        ["Outlook", "Inbox"],
        ["Planner", "Task intake"],
        ["Access", "Data integration"],
        ["Excel", "Storage and integration"],
        ["Power BI", "Processing"],
        ["Power BI", "Analysis and dashboarding"],
        ["Report", "Quarterly reports"]
      ];

      return `
        <div class="senate-pipeline" aria-label="Power BI reporting pipeline">
          ${steps.map(([tool, label], index) => `
            <div class="senate-pipeline-step">
              <i>${tool}</i>
              <strong>${label}</strong>
            </div>
            ${index < steps.length - 1 ? `<span class="senate-pipeline-arrow"></span>` : ""}
          `).join("")}
        </div>
      `;
    }

    function senateArchitecturePipelineHtml() {
      return `
        <div class="architecture-flow vertical senate-architecture-pipeline" aria-label="Microsoft 365 architecture pipeline">
          ${architectureFlowRowHtml(
            "Capture",
            "Request intake in M365",
            "Microsoft Forms captured requests and turned intake into structured fields inside the Microsoft 365 workspace.",
            ["Forms"]
          )}
          ${architectureFlowArrowHtml()}
          ${architectureFlowRowHtml(
            "Own",
            "Planner task ownership",
            "Planner turned incoming work into owners, due dates, status, and handoffs that could be managed consistently.",
            ["Planner"]
          )}
          ${architectureFlowArrowHtml()}
          ${architectureFlowRowHtml(
            "Route",
            "Power Automate data routing",
            "Power Automate took Forms and Planner activity and moved it into the reporting flow with less manual handling.",
            ["Power Automate"]
          )}
          ${architectureFlowArrowHtml()}
          ${architectureFlowRowHtml(
            "Report",
            "Power BI management reporting",
            "Power BI turned the structured workflow data into dashboards and quarterly reporting for management visibility.",
            ["Power BI"]
          )}
        </div>
      `;
    }

    function nextStepDetail(item) {
      if (item.includes("assigned")) return "Turn task state changes into visible Teams notifications so owners know what changed.";
      if (item.includes("dashboard")) return "Expand manager views around workload, overdue work, inbox patterns, and quarterly reporting needs.";
      if (item.includes("feedback")) return "Use employee input to improve the workspace layout, navigation, and adoption path.";
      return "Use recurring task data to identify work that should become a flow, template, or structured request path.";
    }

    function renderLaCiteShowcase(project, tab) {
      const content = document.getElementById("showcase-content");

      if (state.tab === "overview") {
        content.innerHTML = `
          <div class="lacite-case lacite-overview">
            <div class="lacite-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>La Cite</h2>
              </div>
              <span>Sales operations pipeline</span>
            </div>

            ${projectPageIntroHtml({
                kicker: "Overview",
                title: "Every inquiry captured, followed up, and measured.",
                meta: `${project.company} - ${project.year}`,
                body: "Built a sales operations system for a real estate leasing launch where leads were arriving from ads, website forms, inboxes, bookings, calls, and referrals without a reliable single follow-up path. The business problem was missed speed-to-lead and limited visibility into which channels were producing real leasing activity. The solution connected Pipedrive, Zapier, booking workflows, website activity, and reporting dashboards so every inquiry could be captured, assigned, followed up, and measured.",
                tech: ["Zapier", "Pipedrive", "Tableau", "GA4"],
                metrics: [
                  ["100+ -> 0", "Monthly unanswered leads"],
                  ["<24h", "Average response time"],
                  ["Full funnel", "Source to showing visibility"]
                ],
                notes: [
                  "Captured inquiries from forms, inboxes, bookings, ads, calls, and referrals in one pipeline.",
                  "Used Zapier and Pipedrive to create follow-up structure instead of manual lead chasing.",
                  "Connected source activity to reporting so leasing performance could be managed end to end."
                ],
                projectId: project.id
              })}
          </div>
        `;
        return;
      }

      if (state.tab === "architecture") {
        content.innerHTML = `
          <div class="lacite-case lacite-architecture">
            ${architecturePageHtml({
              title: "Marketing sources into a single leasing pipeline.",
              body: "The architecture connected lead sources, CRM records, automation, booking workflows, and reporting into one leasing pipeline. Pipedrive became the system of record, Zapier moved data between forms, inboxes, bookings, and CRM stages, and analytics tools gave the team visibility into where leads came from and how they moved. The goal was to make follow-up reliable enough that no inquiry depended on memory, manual inbox review, or disconnected spreadsheets.",
              graphic: `
                ${laCiteArchitectureHtml()}
              `,
              tools: [
                ["Zapier", "Zapier connected website forms, inbox activity, booking actions, and CRM updates into one workflow."],
                ["Pipedrive", "Pipedrive became the system of record for leads, stages, follow-up tasks, and sales cadence work."],
                ["Tableau", "Tableau supported dashboard views for source performance, lead movement, and leasing funnel visibility."],
                ["GA4", "Google Analytics connected website and campaign behavior to inquiry and booking activity."]
              ]
            })}
          </div>
        `;
        return;
      }

      content.innerHTML = `
        ${futureImprovementsHtml(tab)}
      `;
    }

    function laCiteArchitectureHtml() {
      return `
        <div class="architecture-flow vertical lacite-flow" aria-label="Zapier automation architecture structure">
          ${architectureFlowRowHtml(
            "Capture",
            "Lead and source intake",
            "Website forms, inbox messages, booking requests, ad traffic, and analytics signals created the raw lead activity.",
            ["GA4", "Meta", "Google Ads"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Route",
            "Zapier automation layer",
            "Zapier moved inquiry data between the website, inbox workflows, bookings, CRM records, and reporting tables.",
            ["Zapier"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Operate",
            "CRM and leasing visibility",
            "Pipedrive handled stages, follow-up, and sales cadence work while Tableau surfaced source and funnel reporting.",
            ["Pipedrive", "Tableau"]
          )}
        </div>
      `;
    }

    function laCiteToolRow(src, alt, text) {
      return `
        <div class="lacite-tool-row">
          <img src="${src}" alt="${alt} logo" />
          <p>${text}</p>
        </div>
      `;
    }

    function laCiteNextStepDetail(item) {
      if (item.includes("cost-per")) return "Connect reliable lease outcomes to spend and source data once signing data is consistently available.";
      if (item.includes("Score")) return "Rank leads by source, inquiry type, booking intent, budget, and engagement behavior.";
      if (item.includes("nurture")) return "Create re-approach paths for renters whose move date or buying intent is further out.";
      return "Keep CRM, website, inbox, and ad-platform data aligned so reporting can show the full funnel.";
    }

    function renderTradingShowcase(project, tab) {
      const content = document.getElementById("showcase-content");

      if (state.tab === "overview") {
        content.innerHTML = `
          <div class="trading-case trading-overview">
            <div class="trading-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>Trading R&amp;D</h2>
              </div>
              <span>Quantitative strategy research</span>
            </div>

            ${projectPageIntroHtml({
                kicker: "Overview",
                title: "Turning a market hypothesis into testable rules.",
                meta: `${project.company} - ${project.year}`,
                body: "Built and backtested a TradingView / Pine Script strategy for S&P 500 Futures to turn a discretionary market hypothesis into a repeatable ruleset. The goal was to separate signal quality from intuition by defining exactly when entries, exits, stops, and take-profit conditions should trigger. The solution combined stochastic oscillator behavior, RSI trend context, moving-average direction, and layered exit rules so performance could be reviewed through backtest metrics instead of judgement calls.",
                tech: ["TradingView", "Pine Script"],
                metrics: [
                  ["32.2%", "Simulated net profit"],
                  ["184", "Backtested trades"],
                  ["6.154", "Sortino ratio"]
                ],
                notes: [
                  "Converted a discretionary market idea into explicit entry, exit, and risk rules.",
                  "Used Pine Script to make the strategy repeatable and backtestable.",
                  "Reviewed performance with risk-adjusted metrics instead of headline return alone."
                ],
                projectId: project.id
              })}
          </div>
        `;
        return;
      }

      if (state.tab === "architecture") {
        content.innerHTML = `
          <div class="trading-case trading-architecture">
            ${architecturePageHtml({
              title: "Signal rules, entry logic, and layered exits.",
              body: "The architecture translated a technical trading hypothesis into a rules-based research workflow. TradingView provided the testing environment, while Pine Script defined the entry signals, confirmation filters, stop-loss rules, take-profit logic, and layered exits. The point of the structure was to make the idea inspectable: every trade came from explicit conditions, and performance could be reviewed through repeatable backtest results instead of subjective chart interpretation.",
              graphic: `
                <section class="trading-architecture-columns" aria-label="Trading strategy architecture">
                  ${tradingArchitectureColumnHtml(
                    "System overview",
                    "Hypothesis to backtest",
                    "The project started with a market hypothesis for S&amp;P 500 Futures and converted it into a testable strategy with explicit rules, risk limits, and evaluation metrics.",
                    ["Instrument: S&amp;P 500 Futures", "Stop loss: 0.4%", "Take profit: 1.8%"]
                  )}
                  ${tradingArchitectureColumnHtml(
                    "Opening strategy",
                    "When a trade can start",
                    "Entry logic used stochastic momentum shifts, RSI behavior, and short-term moving-average direction to decide when long or short positions were allowed.",
                    ["Long: upward momentum from oversold zones", "Short: downward momentum from overbought zones", "RSI and SMA used as confirmation filters"]
                  )}
                  ${tradingArchitectureColumnHtml(
                    "Closing strategy",
                    "How risk exits the trade",
                    "Exit logic used defined stop-loss and take-profit rules plus stochastic reversal thresholds so the strategy did not depend on one brittle sell signal.",
                    ["Layered stochastic reversal exits", "Fixed stop and take-profit guardrails", "Backtest reviewed with risk-adjusted metrics"]
                  )}
                </section>
              `,
              tools: [
                ["TradingView", "TradingView provided the charting environment and strategy tester for backtest review."],
                ["Pine Script", "Pine Script translated the hypothesis into programmable entry, exit, and risk rules."]
              ]
            })}
          </div>
        `;
        return;
      }

      content.innerHTML = `
        ${futureImprovementsHtml(tab)}
      `;
    }

    function tradingMetricBoardHtml() {
      const metrics = [
        ["Net Profit", "+32.2%", "+$32,200 USD", "positive"],
        ["Total Trades", "184", "", "neutral"],
        ["Ratio Avg Win / Avg Loss", "1.254", "", "positive"],
        ["Sharpe Ratio", "0.836", "", "warning"],
        ["Sortino Ratio", "6.154", "", "positive"],
        ["Average Trade", "+0.08%", "+$75 USD", "positive"]
      ];

      return `
        <div class="trading-metric-board" aria-label="Trading backtest metrics">
          ${metrics.map(([label, value, sub, tone]) => `
            <div class="trading-metric ${tone}">
              <span>${label}</span>
              <strong>${value}</strong>
              ${sub ? `<small>${sub}</small>` : ""}
            </div>
          `).join("")}
        </div>
      `;
    }

    function tradingStrategyPill(title, lines) {
      return `
        <div class="trading-strategy-pill">
          <strong>${title}</strong>
          ${lines.map(line => `<span>${line}</span>`).join("")}
        </div>
      `;
    }

    function tradingArchitectureColumnHtml(kicker, title, body, points) {
      return `
        <article class="trading-architecture-column">
          <div>
            <p class="showcase-kicker">${kicker}</p>
            <h4>${title}</h4>
          </div>
          <div>
            <p>${body}</p>
            <ul>
              ${points.map(point => `<li>${point}</li>`).join("")}
            </ul>
          </div>
        </article>
      `;
    }

    function tradingOscillatorCardHtml(mode) {
      const closing = mode === "closing";
      return `
        <div class="trading-osc-card ${closing ? "closing" : "opening"}" aria-label="${closing ? "Closing" : "Opening"} oscillator chart">
          <div class="osc-grid"></div>
          <span class="osc-line primary"></span>
          <span class="osc-line secondary"></span>
          <span class="osc-tag top">${closing ? "O94 - XL" : "3ROC"}</span>
          <span class="osc-tag mid">${closing ? "U78 - XL" : "[84-78]"}</span>
          <span class="osc-tag low">${closing ? "O17 - XS" : "[3-24]"}</span>
          <span class="osc-tag bottom">${closing ? "U8 - XS" : "2ROC"}</span>
          <small>${closing ? "Slow stochastics oscillator" : "Entry signal map"}</small>
        </div>
      `;
    }

    function tradingNextStepDetail(item) {
      if (item.includes("commission")) return "Add realistic trading costs before treating the backtest as decision-grade evidence.";
      if (item.includes("walk-forward")) return "Validate the rules on future-like windows instead of only one historical period.";
      if (item.includes("regimes")) return "Stress test the strategy across trend, chop, volatility spikes, and drawdown periods.";
      return "Compare the rule set against simple benchmarks to separate signal value from market beta.";
    }

    function renderMoovezShowcase(project, tab) {
      const content = document.getElementById("showcase-content");

      if (state.tab === "overview") {
        content.innerHTML = `
          <div class="growth-case">
            <div class="growth-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>Moovez</h2>
              </div>
              <span>Growth marketing foundation</span>
            </div>
            ${projectPageIntroHtml({
                kicker: "Overview",
                title: "Early campaign operations across email, social, paid, and SEO.",
                meta: `${project.company} - ${project.year}`,
                body: "Supported Moovez growth marketing while in school, helping create the operating rhythm for early acquisition work across email, social, search, SEO, and campaign analytics. The challenge was learning which channels could create useful engagement without a mature marketing stack or large team. The solution combined newsletters, outbound email, organic content, Meta campaigns, Google Ads, keyword research, ChatGPT-supported caption drafting, content scheduling, and analytics review so campaign work could become more measurable and iterative.",
                tech: ["Klaviyo", "Meta", "Google Ads", "SEMrush", "ChatGPT", "GA4"],
                metrics: [
                  ["10.53%", "Email campaign reply rate"],
                  ["12%", "Organic engagement rate"],
                  ["2020-2023", "Campaign operations period"]
                ],
                notes: [
                  "Ran campaign workflows across email, paid social, search, SEO, and content channels.",
                  "Used ChatGPT to draft captions and prepare content schedules for campaign execution.",
                  "Used analytics feedback to refine keywords, content direction, and acquisition focus.",
                ],
                projectId: project.id
              })}
          </div>
        `;
        return;
      }

      if (state.tab === "architecture") {
        content.innerHTML = `
          <div class="growth-case">
            ${architecturePageHtml({
              title: "Campaigns, content, traffic, and learning loops.",
              body: "The architecture connected campaign execution, content work, AI-assisted drafting, traffic measurement, and learning loops across a lightweight growth stack. Email, paid social, search, SEO, and organic content each created different signals, while ChatGPT supported caption drafting and content scheduling. Analytics tools then helped compare response, engagement, and acquisition quality so campaign learning could carry into the next cycle.",
              graphic: `
                ${moovezArchitectureFlowHtml()}
              `,
              tools: [
                ["Klaviyo", "Klaviyo supported email campaign execution and audience engagement tracking."],
                ["Meta", "Meta supported paid and organic campaign testing across social channels."],
                ["Google Ads", "Google Ads supported paid search acquisition and campaign performance comparison."],
                ["SEMrush", "SEMrush informed keyword research, SEO direction, and content opportunities."],
                ["ChatGPT", "ChatGPT supported caption drafting, content schedule preparation, and campaign copy iteration."],
                ["GA4", "Google Analytics connected traffic, engagement, and campaign learning."]
              ]
            })}
          </div>
        `;
        return;
      }

      content.innerHTML = growthNextHtml(tab, "Moovez");
    }

    function renderLookerShowcase(project, tab) {
      const content = document.getElementById("showcase-content");

      if (state.tab === "overview") {
        content.innerHTML = `
          <div class="growth-case">
            <div class="growth-title-row">
              <div>
                <p class="showcase-kicker">${project.company} - ${project.year}</p>
                <h2>Looker Funnel</h2>
              </div>
              <span>Marketing science and RevOps</span>
            </div>
            ${projectPageIntroHtml({
                kicker: "Overview",
                title: "From traffic data to outbound pipeline context.",
                meta: `${project.company} - ${project.year}`,
                body: "Connected GA4, Looker, landing pages, paid channels, HubSpot forms, and HubSpot pipeline records so marketing and outbound teams could see more than platform-level traffic and spend metrics. The problem was that source data, target clusters, page behavior, form submissions, contacts, and deals lived in separate systems, making it hard to understand which acquisition paths created real opportunities. The solution tied traffic context to CRM records and used Claude to help turn target clusters into landing-page concepts for better campaign and follow-up decisions.",
                tech: ["Looker", "GA4", "HubSpot", "Claude", "Webflow", "Google Ads", "Bing Ads", "LinkedIn Ads", "Amazon Ads"],
                metrics: [
                  ["GA4", "Source and landing page behavior"],
                  ["HubSpot", "Forms, contacts, leads and deals"],
                  ["4+", "Paid acquisition channels"]
                ],
                notes: [
                  "Connected acquisition sources to sessions, landing pages, forms, contacts, and deals.",
                  "Used Claude to help create landing-page concepts from clusters of target accounts and personas.",
                  "Used Looker and GA4 to understand traffic quality beyond platform-level ad metrics.",
                ],
                projectId: project.id
              })}
          </div>
        `;
        return;
      }

      if (state.tab === "architecture") {
        content.innerHTML = `
          <div class="growth-case">
            ${architecturePageHtml({
              title: "Source, session, landing page, form, lead, deal.",
              body: "The architecture connected marketing source data, target clusters, landing-page creation, and downstream CRM context. GA4 captured sessions and landing-page behavior, paid platforms supplied campaign source data, Claude supported landing-page concepts based on target clusters, Webflow acted as the conversion surface, HubSpot forms created contact records, and pipeline records showed what happened after capture. The goal was to move from isolated traffic reporting to a funnel view that connected source, page, form, lead, and deal context.",
              graphic: `
                ${lookerArchitectureFlowHtml()}
              `,
              tools: [
                ["Looker", "Looker supported reporting views that connected campaign and landing-page analysis."],
                ["GA4", "GA4 captured source, session, engagement, and landing page behavior."],
                ["Claude", "Claude supported landing-page concepts and copy direction based on clusters of target accounts and personas."],
                ["HubSpot", "HubSpot connected forms, contacts, lead records, deals, and pipeline context."],
                ["Webflow", "Webflow landing pages acted as campaign-specific conversion surfaces."],
                ["Google Ads", "Google Ads provided paid search campaign source data."],
                ["Bing Ads", "Bing Ads added paid search comparison outside Google."],
                ["LinkedIn Ads", "LinkedIn Ads supported B2B audience and campaign source tracking."],
                ["Amazon Ads", "Amazon Ads provided retail media campaign context."]
              ]
            })}
          </div>
        `;
        return;
      }

      content.innerHTML = growthNextHtml(tab, "Looker Funnel");
    }

    function flowToolGroupHtml(tools) {
      return `
        <div class="architecture-flow-tools">
          ${tools.map(techChipHtml).join("")}
        </div>
      `;
    }

    function architectureFlowArrowHtml() {
      return `<span class="architecture-flow-arrow" aria-hidden="true">${lucideIcon("arrowRight")}</span>`;
    }

    function architectureFlowRowHtml(kicker, title, body, tools) {
      return `
        <article class="architecture-flow-step">
          <div>
            <p class="showcase-kicker">${kicker}</p>
            <h4>${title}</h4>
          </div>
          <div>
            <p>${body}</p>
            ${flowToolGroupHtml(tools)}
          </div>
        </article>
      `;
    }

    function fapeArchitectureFlowHtml() {
      return `
        <div class="architecture-flow vertical fape-architecture-flow" aria-label="Forecast adaptive pricing architecture structure">
          ${architectureFlowRowHtml(
            "Read",
            "Forecast, SKU, and demand context",
            "Amazon catalog data, forecast expectations, inventory pressure, and demand movement created the decision context for each SKU.",
            ["Amazon Data", "Postgres"]
          )}
          ${architectureFlowArrowHtml()}
          ${architectureFlowRowHtml(
            "Decide",
            "Pricing logic and guardrails",
            "Python logic compared forecast position, demand direction, and price constraints to decide whether a SKU should increase, decrease, or hold.",
            ["Python"]
          )}
          ${architectureFlowArrowHtml()}
          ${architectureFlowRowHtml(
            "Operate",
            "Product workflow and measurement",
            "Django supported the workflow layer while WMAPE, margin, and discount efficiency helped evaluate whether pricing decisions improved predictability.",
            ["Django"]
          )}
        </div>
      `;
    }

    function moovezArchitectureFlowHtml() {
      return `
        <div class="architecture-flow vertical moovez-flow" aria-label="Moovez campaign automation structure">
          ${architectureFlowRowHtml(
            "Plan",
            "Campaign and content planning",
            "Keyword research, campaign ideas, captions, and content schedules shaped what would be published and tested.",
            ["SEMrush", "ChatGPT"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Launch",
            "Email, paid, and organic execution",
            "Campaigns moved through email, paid social, search, and organic content channels with consistent messaging.",
            ["Klaviyo", "Meta", "Google Ads"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Learn",
            "Traffic and response feedback",
            "Engagement, reply, traffic, and campaign performance data fed the next content and channel decisions.",
            ["GA4"]
          )}
        </div>
      `;
    }

    function lookerArchitectureFlowHtml() {
      return `
        <div class="architecture-flow vertical looker-flow" aria-label="Looker funnel architecture structure">
          ${architectureFlowRowHtml(
            "Target",
            "Target clusters and source traffic",
            "Paid channels and target account clusters defined who the landing pages and campaigns were built for.",
            ["Google Ads", "Bing Ads", "LinkedIn Ads", "Amazon Ads", "Claude"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Convert",
            "Landing pages and form capture",
            "Claude helped shape page concepts, Webflow hosted landing pages, and HubSpot forms captured conversion activity.",
            ["Claude", "Webflow", "HubSpot"]
          )}
          ${architectureFlowArrowHtml("down")}
          ${architectureFlowRowHtml(
            "Report",
            "Session, lead, and pipeline reporting",
            "GA4 and Looker connected source, landing-page, form, lead, and pipeline context into funnel reporting.",
            ["GA4", "Looker", "HubSpot"]
          )}
        </div>
      `;
    }

    function logoTile(src, alt, variant = "") {
      return `
        <span class="growth-logo-tile ${variant}">
          <img src="${src}" alt="${alt} logo" />
        </span>
      `;
    }

    function growthNextHtml(tab, label) {
      return `
        ${futureImprovementsHtml(tab)}
      `;
    }

    function lucideIcon(name) {
      const paths = {
        stop: `
          <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2Z"></path>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        `,
        caution: `
          <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        `,
        neutral: `
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <path d="M4 20v2"></path>
          <path d="M5 21H3"></path>
        `,
        trendUp: `
          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          <path d="M16 7h6v6"></path>
        `,
        trendDown: `
          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
          <path d="M16 17h6v-6"></path>
        `,
        moveUpRight: `
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        `,
        moveDownRight: `
          <path d="M7 17h10V7"></path>
          <path d="m7 7 10 10"></path>
        `,
        arrowRight: `
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        `
      };

      return `
        <svg class="lucide future-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          ${paths[name] || paths.neutral}
        </svg>
      `;
    }

    function futureItemHtml(item) {
      const detail = typeof item === "string" ? { text: item, type: "neutral" } : item;
      const type = detail.type || "neutral";
      const labels = {
        stop: "Stop: cannot implement without this",
        caution: "Caution: should be implemented soon",
        neutral: "Improvement: would improve the product"
      };

      return `
        <li class="future-improvement-item is-${type}">
          <span class="future-icon-wrap">${lucideIcon(type)}</span>
          <span>
            <span class="future-item-text">${detail.text}</span>
            <strong>${labels[type] || labels.neutral}</strong>
          </span>
        </li>
      `;
    }

    function futureImprovementsHtml(tab) {
      const bullets = tab.bullets || [];
      return `
        <section class="future-improvements">
          <p class="showcase-kicker">Future improvements</p>
          <h3>${tab.headline}</h3>
          <p>${tab.body || ""}</p>
          <ul class="future-improvement-list">
            ${bullets.map(futureItemHtml).join("")}
          </ul>
        </section>
      `;
    }

    function renderActiveTimeline(project) {
      document.querySelectorAll(".project-dot").forEach(dot => {
        dot.classList.toggle("active", dot.dataset.projectId === project.id);
      });

      document.querySelectorAll(".job-bar").forEach(bar => {
        bar.classList.toggle("active", bar.dataset.jobId === project.roleId);
      });

      document.querySelectorAll(".career-node[data-project-id]").forEach(node => {
        node.classList.toggle("active", node.dataset.projectId === project.id);
      });

      document.querySelectorAll(".career-bar[data-job-id]").forEach(bar => {
        bar.classList.toggle("active", bar.dataset.jobId === project.roleId);
      });
    }

    function renderEducation(tabId = "university") {
      const data = education[tabId];
      const panel = document.querySelector(".education-panel");
      const logo = document.getElementById("education-logo");

      document.querySelectorAll("[data-education-tab]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.educationTab === tabId);
      });

      panel.classList.toggle("cert-panel", tabId === "certifications");
      document.getElementById("education-kicker").textContent = data.kicker;
      document.getElementById("education-title").textContent = data.title;
      document.getElementById("education-summary").textContent = data.summary;
      document.getElementById("education-abilities").textContent = data.abilities;
      logo.innerHTML = data.logo ? `<img src="${data.logo}" alt="Coursera logo" />` : "";

      if (tabId === "certifications") {
        document.querySelector(".education-top").classList.add("cert-merged-top");
        document.querySelector(".education-top").classList.remove("university-merged-top");
        document.getElementById("education-summary").innerHTML = `
          ${data.summary}
          <span class="merged-abilities"><strong>Core abilities:</strong> ${data.abilities}</span>
        `;
      } else {
        document.querySelector(".education-top").classList.remove("cert-merged-top");
        document.querySelector(".education-top").classList.add("university-merged-top");
        document.getElementById("education-summary").innerHTML = `
          ${data.summary}
          <span class="merged-abilities"><strong>Core abilities:</strong> ${data.abilities}</span>
        `;
      }

      const grid = document.getElementById("education-grid");
      grid.innerHTML = "";

      data.cards.forEach(item => {
        const card = document.createElement("div");
        card.className = "course-card";
        if (Array.isArray(item)) {
          const [title, text] = item;
          card.innerHTML = `<strong>${title}</strong><span>${text}</span>`;
        } else {
          card.classList.add("detail-course-card");
          if (tabId === "certifications") card.classList.add("cert-course-card");
          card.innerHTML = `
            ${item.certificateUrl ? `<a class="certificate-card-link" href="${item.certificateUrl}" target="_blank" rel="noreferrer" aria-label="View ${item.title} certificate">Certificate</a>` : ""}
            <strong>${item.title}</strong>
            <span>${item.summary}</span>
            <ul class="detail-course-list">
              ${item.courses.map(course => `<li>${course}</li>`).join("")}
            </ul>
          `;
        }
        grid.appendChild(card);
      });
    }

    function bindEducationTabs() {
      document.querySelectorAll("[data-education-tab]").forEach(btn => {
        btn.addEventListener("click", () => renderEducation(btn.dataset.educationTab));
      });
    }

    function bindScrollRail() {
      const progress = document.getElementById("rail-progress");
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progress.style.height = `${Math.max(0, Math.min(100, pct))}%`;
      };

      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
    }

    function renderAll() {
      renderFilters();
      renderShowcase();
    }

    initTimeline();
    bindCareerMap();
    bindOverviewProjectLinks();
    bindProjectOverviewCarousel();
    bindEducationTabs();
    bindScrollRail();
    renderAll();
    renderEducation("university");
