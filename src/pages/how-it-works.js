import React from "react";

import DefaultLayout from "../templates/DefaultLayout";

export default function HowItWorks(data) {
  return (
    <DefaultLayout bodyClass="landing">
      <div className="type__copy limited-width how-it-works">
        <h1 className="spacing-bottom__xxl">How it works</h1>
        <h2 className="spacing-bottom__xl">Roles</h2>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Warden</h3>
          <p>
            Wardens protect the web3 ecosystem from threats by auditing code.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Judge</h3>
          <p>
            Judges decide the severity, validity, and quality of findings and
            rate the performance of wardens.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Sponsor</h3>
          <p>
            Sponsors create prize pools to attract wardens to audit their
            projects.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Scout</h3>
          <p>Scouts focus on scoping and pre-competition intel.</p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Lookout</h3>
          <p>
            Lookouts review and organize submissions to Code4rena’s
            competitions, focusing on lightening and clarifying the project
            team’s workload, and preparing the repo for judging.
          </p>
        </section>
        <h2 className="spacing-top__xxl spacing-bottom__xl">
          Competition Types
        </h2>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Open</h3>
          <p>
            This is the standard competitive audit format on Code4rena where
            everyone is allowed to participate and all information is open and
            public.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Classified</h3>
          <p>
            This type of competition is restricted to Wardens who have met the
            conditions of the Code4rena{" "}
            <a href="https://docs.code4rena.com/roles/certified-contributors">
              Certified Contributor
            </a>{" "}
            program. With customizations available for your privacy needs,
            Code4rena can now offer you an audit that is as stealthy as you
            would like.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Versus</h3>
          <p>
            Sponsors get the opportunity to work with top Wardens from the
            Code4rena community in a format that best suits their needs. When a
            Versus competition is announced, a limited number of the
            highest-ranking Wardens who RSVP within a 48-hour window can
            participate in the audit.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Mitigation review</h3>
          <p>
            Once new code is ready for review after a Code4rena competition, the
            highest-performing Wardens who found the initial vulnerabilities are
            invited to participate in a Mitigation review. Insertions, deletions
            and changes are considered in scope, with these Wardens doing
            another round of auditing to ensure the vulnerabilities have been
            mitigated.
          </p>
        </section>
        <section className="how-it-works__section">
          <h3 className="type__headline__s">Bot Races</h3>
          <p>
            A Bot Race is Code4rena’s solution to bring AI and automatic
            detection into the fold, enabling these tools to be a part of the
            overarching security solution. Bots are registered and used to
            submit findings that can be automatically detected within a
            project’s repo, with the winning report forming the basis for
            out-of-scope submissions for their competition.
          </p>
        </section>
      </div>
    </DefaultLayout>
  );
}
