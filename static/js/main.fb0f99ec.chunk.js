(window.webpackJsonpwebsite_react =
  window.webpackJsonpwebsite_react || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, a, t) {
      e.exports = t.p + "static/media/fz.86fb296a.png";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/forkifySmall.31c2923f.PNG";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/burgerBuilder.5cfa1b0f.png";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/pokedex.da483852.PNG";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/hirehive.66f809f7.PNG";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/tdeefit.6b2dad3f.PNG";
    },
    ,
    ,
    function(e, a, t) {
      e.exports = t(46);
    },
    ,
    ,
    ,
    ,
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    ,
    function(e, a, t) {},
    ,
    ,
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {
      e.exports = t.p + "static/media/BudgControl.f058f145.PNG";
    },
    function(e, a, t) {
      e.exports = t.p + "static/media/tdeeRedo.5979785c.PNG";
    },
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {},
    ,
    ,
    ,
    function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(11),
        l = t.n(i),
        o = (t(25), t(2)),
        c = (t(26), t(27), t(12)),
        s = t.n(c),
        m = function(e) {
          return r.a.createElement(
            "header",
            { className: "toolbar" },
            r.a.createElement(
              "nav",
              { className: "toolbar__navigation spacer" },
              r.a.createElement(
                "div",
                { className: "toolbar__logo" },
                r.a.createElement(
                  "a",
                  { href: "/" },
                  r.a.createElement("img", {
                    alt: "FZ",
                    className: "toolbar__logo-image",
                    src: s.a
                  })
                )
              ),
              r.a.createElement("div", { className: "spacer" }),
              r.a.createElement("div", { className: "spacer" })
            )
          );
        },
        u =
          (t(28),
          t(29),
          function(e) {
            var a = Object(n.useState)(!1),
              t = Object(o.a)(a, 2),
              i = t[0],
              l = t[1],
              c = i ? "expanded" : "";
            return r.a.createElement(
              "div",
              {
                id: e.id,
                className: "section ".concat(c),
                onClick: function() {
                  return l(!0);
                },
                onMouseLeave: function() {
                  return l(!1);
                }
              },
              r.a.createElement("div", {
                className: "section__overlay ".concat(c)
              }),
              r.a.createElement(
                "div",
                { className: "section__content" },
                r.a.cloneElement(e.children, { expanded: i })
              )
            );
          }),
        p =
          (t(30),
          function(e) {
            return r.a.createElement(
              "div",
              { className: "blurb__wrapper" },
              r.a.createElement(
                "h1",
                { className: "blurb__title" },
                " ",
                e.title,
                " "
              ),
              e.expanded ? e.children : null
            );
          }),
        d = t(5),
        f = t.n(d),
        h = t(6),
        g = t.n(h),
        b =
          (t(32),
          f()({ delay: 401 })(function() {
            return r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                "div",
                { className: "about__wrapper" },
                r.a.createElement(
                  "p",
                  { className: "about__paragraph" },
                  "Hi and thank you for visiting my page!"
                ),
                r.a.createElement(
                  "p",
                  { className: "about__paragraph" },
                  "My name is Filip. I am a Polish guy currently residing in Cork, Ireland. I am aspiring to become a better Front End Developer, and dive into Full Stack soon!"
                ),
                r.a.createElement(
                  "p",
                  { className: "about__paragraph" },
                  "This page is a business card/repository for all of my projects."
                ),
                r.a.createElement(
                  "p",
                  { className: "about__paragraph" },
                  "If you wish to get in touch, shoot me an email!"
                )
              )
            );
          })),
        k = t(4),
        E = t(3),
        v = t.n(E),
        _ =
          (t(35),
          function(e) {
            return r.a.createElement(
              "div",
              { className: "skillItem__wrapper" },
              r.a.createElement(
                "p",
                { className: "skillItem__skill" },
                " ",
                e.skill,
                " "
              ),
              r.a.createElement(
                "p",
                { className: "skillItem__level" },
                " ",
                "\u2b50".repeat(e.level),
                " "
              )
            );
          });
      t(36);
      function j(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          a &&
            (n = n.filter(function(a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var y = f()({ delay: 401 })(function() {
          var e = Object(n.useState)(window.innerWidth <= 768),
            a = Object(o.a)(e, 1)[0],
            t = Object(n.useState)({ tech: !1, other: !1, hobby: !1 }),
            i = Object(o.a)(t, 2),
            l = i[0],
            c = i[1],
            s = function(e) {
              c(
                a
                  ? Object(k.a)({}, e, !l[e])
                  : (function(e) {
                      for (var a = 1; a < arguments.length; a++) {
                        var t = null != arguments[a] ? arguments[a] : {};
                        a % 2
                          ? j(t, !0).forEach(function(a) {
                              Object(k.a)(e, a, t[a]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t)
                            )
                          : j(t).forEach(function(a) {
                              Object.defineProperty(
                                e,
                                a,
                                Object.getOwnPropertyDescriptor(t, a)
                              );
                            });
                      }
                      return e;
                    })({}, l, Object(k.a)({}, e, !l[e]))
              );
            };
          return r.a.createElement(
            g.a,
            null,
            r.a.createElement(
              "div",
              { className: "skills__wrapper" },
              r.a.createElement(
                v.a,
                {
                  handleTriggerClick: function() {
                    return s("tech");
                  },
                  open: l.tech,
                  trigger: "Technical Skills"
                },
                r.a.createElement(
                  "p",
                  { className: "skills__paragraph" },
                  "Here is a list of few things things I know about and a scale of my familiarity with them:"
                ),
                r.a.createElement(
                  "div",
                  { className: "skills__list" },
                  r.a.createElement(_, { skill: "HTML5", level: "4" }),
                  r.a.createElement(_, { skill: "CSS (+pre)", level: "4" }),
                  r.a.createElement(_, { skill: "Javascript", level: "4" }),
                  r.a.createElement(_, { skill: "Bootstrap", level: "4" }),
                  r.a.createElement(_, { skill: "React.js", level: "3" }),
                  r.a.createElement(_, { skill: "Redux", level: "3" }),
                  r.a.createElement(_, { skill: "Thunk", level: "3" }),
                  r.a.createElement(_, { skill: "GIT", level: "3" }),
                  r.a.createElement(_, { skill: "RESTful APIs", level: "3" }),
                  r.a.createElement(_, { skill: "jQuery", level: "2" }),
                  r.a.createElement(_, { skill: "SQL", level: "1" }),
                  r.a.createElement(_, { skill: "Python", level: "1" })
                ),
                r.a.createElement(
                  "p",
                  { className: "skills__addendum" },
                  "...and numerous other smaller libraries!"
                )
              ),
              r.a.createElement(
                v.a,
                {
                  handleTriggerClick: function() {
                    return s("other");
                  },
                  open: l.other,
                  trigger: "Other Skills"
                },
                r.a.createElement(
                  "p",
                  { className: "skills__paragraph" },
                  "And here is a couple of other skills that I have levelled-up throughout my career:"
                ),
                r.a.createElement(
                  "div",
                  { className: "skills__list" },
                  r.a.createElement(_, {
                    skill: "Customer Management and Support"
                  }),
                  r.a.createElement(_, { skill: "Project Coordination" }),
                  r.a.createElement(_, { skill: "Software Localization" }),
                  r.a.createElement(_, { skill: "Community Management" }),
                  r.a.createElement(_, { skill: "Team Coordination" })
                )
              ),
              r.a.createElement(
                v.a,
                {
                  handleTriggerClick: function() {
                    return s("hobby");
                  },
                  open: l.hobby,
                  trigger: "Hobbies/Interests"
                },
                r.a.createElement(
                  "p",
                  { className: "skills__paragraph" },
                  "My main hobbies are weightlifting, video and board games, cooking and comedy of different kinds. Outside of web development, my passions include nutrition science, fitness, evolutionary psychology and video games industry. I love problem-solving and puzzles of all sorts and I am an active member of British Mensa."
                )
              )
            )
          );
        }),
        w =
          (t(37),
          function(e) {
            return r.a.createElement(
              "a",
              {
                href: e.hrefLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "projectItem__wrapper"
              },
              r.a.createElement("img", {
                alt: e.triggerTitle,
                className: "projectItem__img",
                src: e.img
              }),
              r.a.createElement(
                "p",
                { className: "projectItem__paragraph" },
                e.children
              )
            );
          }),
        N = (t(38), t(39), t(13)),
        O = t.n(N),
        P = t(14),
        C = t.n(P),
        I = t(15),
        S = t.n(I),
        T = t(16),
        x = t.n(T),
        z = t(17),
        B = t.n(z),
        R =
          (t(40),
          f()({ delay: 401 })(function() {
            var e = Object(n.useState)(window.innerWidth <= 768),
              a =
                (Object(o.a)(e, 1)[0],
                Object(n.useState)({
                  proj1: !1,
                  proj2: !1,
                  proj3: !1,
                  proj4: !1,
                  proj5: !1,
                  proj6: !1,
                  proj7: !1,
                  proj8: !1
                })),
              t = Object(o.a)(a, 2),
              i = t[0],
              l = t[1],
              c = function(e) {
                l(Object(k.a)({}, e, !i[e]));
              };
            return r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                "div",
                { className: "projects__wrapper" },
                r.a.createElement(
                  "div",
                  { className: "projects__list" },
                  r.a.createElement(
                    v.a,
                    {
                      handleTriggerClick: function() {
                        return c("proj4");
                      },
                      open: i.proj4,
                      trigger: "Forkify - API shut down/looking for new one"
                    },
                    r.a.createElement(
                      w,
                      {
                        hrefLink: "https://filipzakrocki.github.io/forkify/",
                        img: O.a
                      },
                      "App using the Food2Fork API () that allows you to look for recipes, save them as favorites and prepare shopping lists. Coded as a project with Jonas Schmedtimann as a part of his Udemy Course."
                    )
                  ),
                  r.a.createElement(
                    v.a,
                    {
                      handleTriggerClick: function() {
                        return c("proj5");
                      },
                      open: i.proj5,
                      trigger: "Burger Builder"
                    },
                    r.a.createElement(
                      w,
                      {
                        hrefLink:
                          "https://filipzakrocki.github.io/burgerBuilder/#/",
                        img: C.a
                      },
                      "Build your own burger with this simple, mobile-friendly React+Redux App - orders and authentication are stored on Firebase server."
                    )
                  ),
                  r.a.createElement(
                    v.a,
                    {
                      handleTriggerClick: function() {
                        return c("proj6");
                      },
                      open: i.proj6,
                      trigger: "HireHive application"
                    },
                    r.a.createElement(
                      w,
                      {
                        hrefLink: "https://filipzakrocki.github.io/hirehive",
                        img: x.a
                      },
                      "Job search engine. Search by keyword, location or job title and #hashtags. Assignment for HireHive startup, company offering Recruitment SaaS solutions."
                    )
                  ),
                  r.a.createElement(
                    v.a,
                    {
                      handleTriggerClick: function() {
                        return c("proj7");
                      },
                      open: i.proj7,
                      trigger: "Pokemon TCG Pokedex"
                    },
                    r.a.createElement(
                      w,
                      {
                        hrefLink: "https://filipzakrocki.github.io/pokedex",
                        img: S.a
                      },
                      "Browse through a large collection of Pokemon Trading Card Game. React.js + Redux + Thunk. Add additional criteria in the searchbar!"
                    )
                  ),
                  r.a.createElement(
                    v.a,
                    {
                      handleTriggerClick: function() {
                        return c("proj8");
                      },
                      open: i.proj8,
                      trigger: "Tdee.fit (Work in Progress)"
                    },
                    r.a.createElement(
                      w,
                      { hrefLink: "https://tdee.fit", img: B.a },
                      "Calculate your Total Daily Energy Expenditure with this tool by entering daily weight and caloric consumption. Features local and server saving, Firebase Database and authentication and CI/CD with Netlify. Constructed with React + Redux!"
                    )
                  )
                )
              )
            );
          })),
        A = function() {
          return r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(
              u,
              { id: "aboutme" },
              r.a.createElement(
                p,
                { title: "About Me \ud83d\ude4b\u200d\u2642\ufe0f" },
                r.a.createElement(b, null)
              )
            ),
            r.a.createElement(
              u,
              { id: "skills" },
              r.a.createElement(
                p,
                { title: "\ud83d\udcbb Skills" },
                r.a.createElement(y, null)
              )
            ),
            r.a.createElement(
              u,
              { id: "projects" },
              r.a.createElement(
                p,
                { title: "Projects \ud83d\udcc1" },
                r.a.createElement(R, null)
              )
            )
          );
        },
        F = (t(41), t(42), t(18)),
        L = t(19),
        G = t(7),
        D = function(e) {
          var a = null;
          switch (e.icon) {
            case "facebook":
              a = G.a;
              break;
            case "github":
              a = G.c;
              break;
            case "linkedin":
              a = G.d;
              break;
            case "mail":
              a = L.a;
              break;
            case "messenger":
              a = G.b;
              break;
            default:
              return null;
          }
          return r.a.createElement(
            "div",
            { className: "botnavItem" },
            r.a.createElement(
              "a",
              { className: e.icon, href: e.url },
              r.a.createElement(F.a, { icon: a })
            )
          );
        },
        H = function() {
          return r.a.createElement(
            "header",
            { className: "botnav" },
            r.a.createElement(
              "nav",
              { className: "botnav__nav" },
              r.a.createElement("div", { className: "botnav__nav-spacer" }),
              r.a.createElement(
                "div",
                { className: "botnav__nav-links" },
                r.a.createElement(D, {
                  icon: "github",
                  url: "https://github.com/filipzakrocki"
                }),
                r.a.createElement(D, {
                  icon: "linkedin",
                  url: "https://www.linkedin.com/in/filip-zakrocki-08b561190/"
                }),
                r.a.createElement(D, {
                  icon: "mail",
                  url: "mailto:zakrofil@gmail.com?subject=[Website Inquiry]"
                })
              ),
              r.a.createElement("div", { className: "botnav__nav-spacer" })
            )
          );
        };
      var M = function() {
        var e = Object(n.useState)(!1),
          a = Object(o.a)(e, 2),
          t = a[0],
          i = a[1];
        return r.a.createElement(
          "div",
          { className: "App" },
          r.a.createElement(m, {
            click: function(e) {
              return i(!t);
            }
          }),
          r.a.createElement(A, null),
          r.a.createElement(H, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(r.a.createElement(M, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[20, 1, 2]]
]);
//# sourceMappingURL=main.fb0f99ec.chunk.js.map
