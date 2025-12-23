// pages/index.js
import Head from "next/head";
import Image from "next/image";
import LeadForm from "../components/LeadForm";
import FAQ from "../components/FAQ";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Never Miss a Document Again — IRCC Checklist</title>
        <meta name="description" content="Prepare IRCC-ready documents automatically for study permits and Express Entry." />
        <meta property="og:title" content="Never Miss a Document Again" />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>
      Prepare Your IRCC Documents
      <br />
      Without Stress or Confusion
    </h1>

  <p className={styles.heroSubtitle}>
  Applying to Canada is stressful — especially when document requirements
  change based on your profile. DocRoute helps you organize everything
  clearly before you submit to IRCC.
</p>


    <div className={styles.heroButtons}>
      <a href="#checklist" className={styles.primaryButton}>
        Get Free Document Checklist
      </a>

      <a href="#form" className={styles.secondaryButton}>
        Join Early Access
      </a>
    </div>
  </div>

  <div className={styles.heroImage}>
    {/* your Image component stays here */}
  </div>
</section>

<section id="form" className={styles.formSection}>
  <h2 className={styles.formTitle}>Get Your Free IRCC Document Checklist</h2>

  <form
    action="https://formspree.io/f/mpqaobyo"
    method="POST"
    className={styles.form}
  >
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your email"
      required
    />

    <button type="submit" className={styles.primaryButton}>
      Submit & Get Checklist
    </button>
  </form>

  <p className={styles.downloadHint}>
    After submitting, download your checklist here:
    <br />
    <a href="/checklist.pdf" target="_blank">
      Download Checklist PDF
    </a>
  </p>
</section>

<section className={styles.problem}>
  <h2 className={styles.problemTitle}>The Problem</h2>

  <div className={styles.problemGrid}>
    <div className={styles.problemCard}>
      <h3>Too Many Documents</h3>
      <p>
        IRCC applications require dozens of documents depending on your profile.
        One small mistake can delay or refuse your application.
      </p>
    </div>

    <div className={styles.problemCard}>
      <h3>Confusing Requirements</h3>
      <p>
  Many applicants rely on agents, YouTube videos, or Facebook groups —
  often receiving incomplete or incorrect information.
</p>

    </div>

    <div className={styles.problemCard}>
      <h3>Manual & Stressful</h3>
      <p>
        Renaming, resizing, and combining PDFs manually is time-consuming,
        frustrating, and error-prone.
      </p>
    </div>
  </div>
</section>

<section className={styles.how}>
  <h2 className={styles.howTitle}>How It Works</h2>

  <div className={styles.steps}>
    <div className={styles.step}>
      <span>1</span>
      <h3>Create Your Profile</h3>
      <p>
        Answer simple questions about your application type,
        funding source, and sponsor.
      </p>
    </div>

    <div className={styles.step}>
      <span>2</span>
      <h3>Upload Documents</h3>
      <p>
        Upload your files. We tell you exactly what documents are required
        for your specific case.
      </p>
    </div>

    <div className={styles.step}>
      <span>3</span>
      <h3>Download IRCC-Ready Files</h3>
      <p>
        Your documents are automatically renamed, resized,
        and combined — ready to upload to IRCC.
      </p>
    </div>
  </div>
</section>

 <section id="checklist" className={styles.checklist}>
  <h2 className={styles.checklistTitle}>Start With Clarity</h2>

  <p className={styles.checklistSubtitle}>
    Download a free, expert-designed checklist to understand exactly
    which documents you need — before you apply.
  </p>

  <a
    href="/checklist.pdf"
    target="_blank"
    className={styles.primaryButton}
  >
    Download Free IRCC Checklist
  </a>
</section>
<div className={styles.sectionDivider}></div>

<section className={styles.disclaimer}>
  <p>
    DocRoute is not affiliated with IRCC or the Government of Canada.
    We help applicants organize documents. For legal advice,
    consult a licensed immigration professional. We do not promise approvals — we help you submit complete,
well-organized applications.

  </p>
</section>

<section className={styles.finalCta}>
  <h2 className={styles.finalCtaTitle}>Ready to Prepare Your IRCC Documents the Right Way?</h2>

  <p className={styles.finalCtaText}>
    Join early access and be the first to use automated
    document preparation for Canada immigration.
  </p>

  <a href="#form" className={styles.primaryButton}>
    Join Early Access
  </a>
</section>

        <section className={styles.features}>
  <h2 className={styles.featuresTitle}>Why Applicants Choose DocRoute</h2>

  <div className={styles.featureGrid}>
    <div className={styles.featureCard}>
      <h3>Profile-Based Requirements</h3>
      <p>
        Document requirements adapt to your funding source,
        sponsor type, and application category.
      </p>
    </div>

    <div className={styles.featureCard}>
      <h3>Automatic File Preparation</h3>
      <p>
        Files are resized, renamed, and combined automatically
        to meet IRCC upload rules.
      </p>
    </div>

    <div className={styles.featureCard}>
      <h3>Error Reduction</h3>
      <p>
        Avoid common mistakes that cause delays,
        rejections, or unnecessary stress.
      </p>
    </div>

    <div className={styles.featureCard}>
      <h3>Optional Expert Review</h3>
      <p>
        Request a document review before submission
        for extra confidence.
      </p>
    </div>
  </div>
</section>


 <section className={styles.faq}>
  <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

  <div className={styles.faqList}>
    <details>
      <summary>Is DocRoute affiliated with IRCC?</summary>
      <p className={styles.faqAnswer}>No. We are an independent platform that helps organize documents.</p>
    </details>

    <details>
      <summary>Does using DocRoute guarantee approval?</summary>
      <p className={styles.faqAnswer}>No. Approval decisions are made by IRCC. We help reduce document errors.</p>
    </details>

    <details>
      <summary>Is my data secure?</summary>
      <p className={styles.faqAnswer}>Security is a top priority. Sensitive data handling will follow best practices.</p>
    </details>

    <details>
      <summary>Is this free?</summary>
      <p className={styles.faqAnswer}>The checklist is free. Optional review services may be paid.</p>
    </details>
  </div>
</section>

        <footer className={styles.footer}>
  <p>
    © 2025 DocRoute — 
    <a href="mailto:contact@docroute.app"> Contact</a>
  </p>
</footer>

      </main>
    </>
  );
}
