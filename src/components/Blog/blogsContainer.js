import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const BlogsContainer = () => {
  const blogData = [
    {
      img: "https://image.pollinations.ai/prompt/construction%20planning%20session%20with%20gantt%20chart%20and%20blueprints%20realistic%20photo?width=1200&height=900&seed=51&model=flux",
      heading: "How to Build a Reliable Construction Baseline Schedule.",
      para:
        "A schedule is only useful when crews can execute it. We cover sequencing, milestone handoffs, float strategy, and reporting rhythms that keep work moving.",
    },
    {
      img: "https://image.pollinations.ai/prompt/preconstruction%20checklist%20meeting%20in%20site%20office%20realistic%20photo?width=1200&height=900&seed=52&model=flux",
      heading: "Pre-Construction Checklists That Prevent Costly Delays.",
      para:
        "From permit readiness to trade procurement and long-lead materials, this checklist helps teams reduce uncertainty before mobilization.",
    },
    {
      img: "https://image.pollinations.ai/prompt/owner%20architect%20contractor%20meeting%20around%20table%20realistic%20photo?width=1200&height=900&seed=53&model=flux",
      heading: "Running Weekly OAC Meetings That Actually Resolve Issues.",
      para:
        "A structured owner-architect-contractor meeting can eliminate drift. Learn agenda formats, escalation rules, and follow-up systems that drive action.",
    },
    {
      img: "https://image.pollinations.ai/prompt/construction%20quality%20inspection%20team%20checking%20finishes%20realistic%20photo?width=1200&height=900&seed=54&model=flux",
      heading: "Field Quality Walks: Catching Rework Before It Spreads.",
      para:
        "Daily and weekly quality routines reduce punch list fatigue. We break down what to inspect, who signs off, and how to document closeouts effectively.",
    },
    {
      img: "https://image.pollinations.ai/prompt/construction%20cost%20control%20analysis%20dashboard%20on%20tablet%20realistic%20photo?width=1200&height=900&seed=55&model=flux",
      heading: "Construction Budget Tracking Without Spreadsheet Chaos.",
      para:
        "We outline a lightweight reporting model for commitments, approved changes, forecast-at-completion, and variance tracking your stakeholders can trust.",
    },
    {
      img: "https://image.pollinations.ai/prompt/subcontractor%20coordination%20walkthrough%20at%20commercial%20build%20realistic%20photo?width=1200&height=900&seed=56&model=flux",
      heading: "Subcontractor Coordination During High-Overlap Phases.",
      para:
        "When mechanical, electrical, and finish work stack up, proactive coordination prevents stoppages. We cover look-ahead planning that keeps all trades productive.",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map(blog => (
            <div>
              <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={blog.img}
                ></img>
              </div>
              <h1 className="text-3xl mt-2 font-poppins font-bold">
                {blog.heading}
              </h1>
              <p className="text-sm opacity-50 mt-2">{blog.para}</p>
            </div>
          ))}
        </div>
      </Fade>
      <div className="w-full h-72 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
        <h1 className="font-poppins font-bold text-3xl">Stay in the loop</h1>
        <h2 className="text-lg mt-2 opacity-50">
          Join our newsletter for practical project delivery tips
        </h2>
        <div className="flex-row mt-10">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-white"
            title="Subscribe"
            textColor="text-black"
            marginClass="ml-5"
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default BlogsContainer
