/* =========================================================
   HEADER AO ROLAR
========================================================== */

const header =
  document.getElementById("siteHeader");

window.addEventListener(
  "scroll",
  () => {

    if (!header) return;

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

  }
);


/* =========================================================
   REVEAL DAS SEÇÕES
========================================================== */

const revealItems =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");

            observer
              .unobserve(
                entry.target
              );

          }

        }
      );

    },
    {
      threshold:0.12
    }
  );


revealItems.forEach(
  item => {

    observer.observe(item);

  }
);


/* =========================================================
   FAZ O HERO APARECER NO CARREGAMENTO
========================================================== */

window.addEventListener(
  "load",
  () => {

    document
      .querySelectorAll(
        ".hero .reveal"
      )
      .forEach(
        el => {

          el.classList.add(
            "visible"
          );

        }
      );

  }
);


/* =========================================================
   MOVIMENTO DO SÍMBOLO DA HOME
========================================================== */

const logoScene =
  document.getElementById(
    "logoScene"
  );

const heroSymbol =
  document.getElementById(
    "heroSymbol"
  );


if (
  logoScene &&
  heroSymbol
) {

  logoScene.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        logoScene
          .getBoundingClientRect();


      /* posição do mouse
         entre -0.5 e +0.5 */

      const x =
        (
          event.clientX
          -
          rect.left
        )
        /
        rect.width
        -
        0.5;


      const y =
        (
          event.clientY
          -
          rect.top
        )
        /
        rect.height
        -
        0.5;


      /* intensidade */

      const moveX =
        x * 32;

      const moveY =
        y * 24;

      const rotate =
        x * 4;


      heroSymbol.style.transform = `
        translate3d(
          ${moveX}px,
          ${moveY}px,
          0
        )
        rotate(
          ${rotate}deg
        )
      `;

    }
  );


  /* RETORNA AO CENTRO */

  logoScene.addEventListener(
    "mouseleave",
    () => {

      heroSymbol.style.transform = `
        translate3d(
          0,
          0,
          0
        )
        rotate(
          0deg
        )
      `;

    }
  );

}


/* =========================================================
   MENU ATIVO CONFORME A SEÇÃO
========================================================== */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            navLinks.forEach(
              link => {

                link
                  .classList
                  .remove(
                    "active"
                  );

              }
            );


            const current =
              document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
              );


            if (current) {

              current
                .classList
                .add(
                  "active"
                );

            }

          }

        }
      );

    },
    {
      threshold:0.45
    }
  );


sections.forEach(
  section => {

    sectionObserver
      .observe(section);

  }
);