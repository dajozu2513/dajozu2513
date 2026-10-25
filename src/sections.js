import { t, data } from './i18n.js';

// Minimal element builder. Text always goes through textContent, never parsed as HTML.
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) {
    if (child) node.append(child);
  }
  return node;
}

// Visible marker when a section's content is missing (spec rule: never fill gaps silently).
function missing(key) {
  return el('p', { class: 'pending', text: t(key) });
}

// External link. Screen readers hear "Repository: <target> (opens in a new tab)",
// so repeated labels like "Repository" stay distinguishable.
function externalLink(label, target, href, className) {
  return el('a', { class: className, href, target: '_blank', rel: 'noopener noreferrer' }, [
    el('span', { text: label }),
    el('span', { class: 'visually-hidden', text: `: ${target} (${t('ui.newTab')})` }),
    el('span', { class: 'link-arrow', 'aria-hidden': 'true', text: '↗' }),
  ]);
}

function renderAbout(slot) {
  const about = data('about');
  if (!about) return slot.replaceChildren(missing('about'));

  const facts = about.facts.map((fact) =>
    el('div', { class: 'facts__row' }, [
      el('dt', { class: 'facts__label', text: fact.label }),
      ...fact.values.map((value) => el('dd', { class: 'facts__value', text: value })),
    ]),
  );

  slot.replaceChildren(
    el('div', { class: 'about' }, [
      el('p', { class: 'about__summary', text: about.summary }),
      el('dl', { class: 'facts' }, facts),
    ]),
  );
}

function renderExperience(slot) {
  const jobs = data('experience');
  if (!jobs) return slot.replaceChildren(missing('experience'));

  const items = jobs.map((job) =>
    el('li', { class: 'job' }, [
      el('div', { class: 'job__meta' }, [
        el('p', { class: 'job__period', text: job.period }),
        el('p', { class: 'job__type', text: job.type }),
      ]),
      el('div', { class: 'job__body' }, [
        el('h3', { class: 'job__role', text: job.role }),
        el('p', { class: 'job__org' }, [
          el('span', { text: job.org }),
          el('span', { class: 'job__location', text: job.location }),
        ]),
        el(
          'ul',
          { class: 'job__highlights' },
          job.highlights.map((highlight) => el('li', { text: highlight })),
        ),
        el(
          'ul',
          { class: 'tags', 'aria-label': t('ui.skillsLabel') },
          job.skills.map((skill) => el('li', { class: 'tag', text: skill })),
        ),
      ]),
    ]),
  );

  slot.replaceChildren(el('ol', { class: 'timeline' }, items));
}

function renderProjects(slot) {
  const projects = data('projects');
  if (!projects) return slot.replaceChildren(missing('projects'));

  const cards = projects.map((project, index) => {
    const links = [externalLink(t('ui.repoLink'), project.name, project.repo, 'project__link')];
    if (project.demo) {
      links.push(externalLink(t('ui.demoLink'), project.name, project.demo, 'project__link'));
    }

    // VialReport and Black & White are emphasised equally, with no label.
    return el('li', { class: project.highlight ? 'project project--highlight' : 'project' }, [
      el('div', { class: 'project__head' }, [
        el('span', { class: 'project__index', text: String(index + 1).padStart(2, '0') }),
      ]),
      el('div', { class: 'project__main' }, [
        el('h3', { class: 'project__name', text: project.name }),
        el('p', { class: 'project__context', text: project.context }),
        el('p', { class: 'project__description', text: project.description }),
      ]),
      el('div', { class: 'project__aside' }, [
        project.highlights
          ? el(
              'ul',
              { class: 'project__highlights' },
              project.highlights.map((highlight) => el('li', { text: highlight })),
            )
          : null,
        el(
          'ul',
          { class: 'tags', 'aria-label': t('ui.stackLabel') },
          project.stack.map((tech) => el('li', { class: 'tag', text: tech })),
        ),
      ]),
      el('div', { class: 'project__links' }, links),
    ]);
  });

  slot.replaceChildren(el('ol', { class: 'projects' }, cards));
}

function renderSkills(slot) {
  const groups = data('skills');
  if (!groups) return slot.replaceChildren(missing('skills'));

  const rows = groups.map((group) =>
    el('div', { class: 'skills__row' }, [
      el('h3', { class: 'skills__category', text: group.category }),
      el(
        'ul',
        { class: 'tags' },
        group.items.map((item) => el('li', { class: 'tag', text: item })),
      ),
    ]),
  );

  slot.replaceChildren(el('div', { class: 'skills' }, rows));
}

function renderEducation(slot) {
  const schools = data('education');
  if (!schools) return slot.replaceChildren(missing('education'));

  const blocks = schools.map((school) =>
    el('div', { class: 'school' }, [
      el('h3', { class: 'school__name', text: school.institution }),
      el(
        'ul',
        { class: 'degrees' },
        school.degrees.map((degree) =>
          el('li', { class: 'degree' }, [
            el('p', { class: 'degree__name', text: degree.name }),
            el(
              'p',
              { class: 'degree__meta' },
              [degree.period, degree.status]
                .filter(Boolean)
                .map((part) => el('span', { class: 'degree__part', text: part })),
            ),
          ]),
        ),
      ),
    ]),
  );

  slot.replaceChildren(el('div', { class: 'education' }, blocks));
}

function renderCertifications(slot) {
  const certifications = data('certifications');
  if (!certifications) return slot.replaceChildren(missing('certifications'));

  const items = certifications.map((cert) =>
    el('li', { class: 'cert' }, [
      el('p', { class: 'cert__meta' }, [
        el('span', { text: cert.issuer }),
        el('span', { class: 'cert__date', text: cert.date }),
      ]),
      el('h3', { class: 'cert__name', text: cert.name }),
      cert.id
        ? el('p', { class: 'cert__id' }, [
            el('span', { class: 'cert__id-label', text: t('ui.credentialLabel') }),
            el('span', { text: cert.id }),
          ])
        : null,
      cert.url ? externalLink(t('ui.verifyLink'), cert.name, cert.url, 'cert__link') : null,
    ]),
  );

  slot.replaceChildren(el('ul', { class: 'certs' }, items));
}

function renderBeyond(slot) {
  const beyond = data('beyond');
  if (!beyond) return slot.replaceChildren(missing('beyond'));

  const activities = beyond.activities.map((activity) =>
    el('li', { class: 'activity' }, [
      el('p', { class: 'activity__period', text: activity.period }),
      el('h4', { class: 'activity__name', text: activity.name }),
      activity.role ? el('p', { class: 'activity__role', text: activity.role }) : null,
      el('p', { class: 'activity__description', text: activity.description }),
    ]),
  );

  slot.replaceChildren(
    el('div', { class: 'beyond' }, [
      el('div', { class: 'beyond__group' }, [
        el('h3', { class: 'beyond__title', text: beyond.activitiesTitle }),
        el('ul', { class: 'activities' }, activities),
      ]),
      el('div', { class: 'beyond__group' }, [
        el('h3', { class: 'beyond__title', text: beyond.interestsTitle }),
        el(
          'ul',
          { class: 'interests' },
          beyond.interests.map((interest) => el('li', { text: interest })),
        ),
      ]),
    ]),
  );
}

function renderContact(slot) {
  const contact = data('contact');
  if (!contact) return slot.replaceChildren(missing('contact'));

  const rows = contact.channels.map((channel) =>
    el('li', { class: 'contact__row' }, [
      el('span', { class: 'contact__label', text: channel.label }),
      channel.external
        ? externalLink(channel.text, channel.label, channel.href, 'contact__link')
        : el('a', { class: 'contact__link', href: channel.href, text: channel.text }),
    ]),
  );

  // The CV follows the active language. BASE_URL keeps the path right under /dajozu2513/.
  // No button until a PDF without the phone number is configured in content.js.
  const { cv } = contact;
  const cvAction = cv.file
    ? el('div', { class: 'contact__cv' }, [
        el('a', {
          class: 'button',
          href: `${import.meta.env.BASE_URL}${cv.file}`,
          download: '',
          type: 'application/pdf',
          text: cv.label,
        }),
      ])
    : null;

  slot.replaceChildren(
    el('div', { class: 'contact' }, [el('ul', { class: 'contact__list' }, rows), cvAction]),
  );
}

function renderFooter(slot) {
  const footer = data('footer');
  if (!footer) return slot.replaceChildren(missing('footer'));

  // Same two-line brand as the header ("Professional portfolio" over the name).
  slot.replaceChildren(
    el('div', { class: 'footer' }, [
      el('p', { class: 'brand footer__brand' }, [
        el('span', { class: 'brand__label', text: t('ui.brandLabel') }),
        el('span', { class: 'brand__name', text: footer.name }),
      ]),
      el('p', { class: 'footer__copyright', text: footer.copyright }),
    ]),
  );
}

// data-slot name in index.html -> renderer.
const renderers = {
  about: renderAbout,
  experience: renderExperience,
  projects: renderProjects,
  skills: renderSkills,
  education: renderEducation,
  certifications: renderCertifications,
  beyond: renderBeyond,
  contact: renderContact,
  footer: renderFooter,
};

export function renderSections() {
  for (const [name, render] of Object.entries(renderers)) {
    const slot = document.querySelector(`[data-slot="${name}"]`);
    if (slot) render(slot);
  }
}
