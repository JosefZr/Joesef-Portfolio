import React from "react";
import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CaseStudyModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-[#0A0A1F] rounded-3xl overflow-y-scroll border border-white/10 shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A1F]/90">
          <div className="text-sm font-medium text-purple-300">
            Case Study · LB Stomatology
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content (scrollable) */}
        <div className="overflow-y-auto px-6 pb-8 pt-6 md:px-8 md:pb-10 md:pt-6 space-y-16">
          {/* HERO SECTION */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 font-medium text-sm">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                From Zero to a Dental Empire.
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                How I built LB Stomatology into Algeria's #1 dental education
                ecosystem — and what it taught me about growth, clarity, and
                leadership.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691635355e3277abed46c0b6/458ef522e_IMG_2706.jpg"
                alt="LB Partners"
                className="w-full h-auto"
              />
            </motion.div>

            <div className="text-center">
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
              >
                About Dr. L.Benyahia
              </button>
            </div>
          </div>

          {/* THE BEGINNING */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">The Beginning</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Built in Chaos, Fueled by Speed.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Before LB Stomatology, there was no roadmap — no investors, no
                team, just a clear vision: to fix how dentistry is taught.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Within six months, that vision turned into momentum:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span className="text-gray-300">600+ qualified leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span className="text-gray-300">Packed workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span className="text-gray-300">
                    A growing community of students and dentists that trusts my
                    company
                  </span>
                </li>
              </ul>
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-300 text-lg">
                "When the system failed us, I built my own."
              </blockquote>
            </div>
          </section>

          {/* THE BREAKTHROUGH */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">The Breakthrough</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Turning Education Into an Ecosystem
              </h3>
              <p className="text-gray-400 leading-relaxed">
                LB Stomatology wasn't built to sell courses. It was built to
                make learning practical, human, and connected.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <span className="text-purple-400 font-bold text-2xl">📚</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      LB Dental Academy 2.0
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Live mentorship from top dental specialists, real case
                      discussions, and recorded Masterclasses & workshops.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <span className="text-purple-400 font-bold text-2xl">🎓</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      LB Mentorship Program
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Direct guidance and feedback from specialists.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <span className="text-purple-400 font-bold text-2xl">🪙</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">LB-COINS</h4>
                    <p className="text-gray-400 text-sm">
                      A gamified system where students learn, earn, and redeem
                      instruments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THE PROOF */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">The Proof</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Measurable Growth, Meaningful Change
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <Users className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">900+</div>
                    <div className="text-sm text-gray-400">Active members</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">87%</div>
                    <div className="text-sm text-gray-400">
                      Course completion rate
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">3×</div>
                    <div className="text-sm text-gray-400">
                      Higher engagement
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <Rocket className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">
                      Local→National
                    </div>
                    <div className="text-sm text-gray-400">Recognition</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                LB Stomatology became the bridge between academia and real-world
                dentistry, partnering with dental companies and professors to
                build a new hybrid education model — theory + clinical
                experience.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-300 text-lg">
                "We don't teach dentistry, we teach dentists how to think
                clinically, act confidently, and grow continuously."
                <br />
                <span className="text-sm text-gray-500">
                  – CEO – Dr L.Benyahia
                </span>
              </blockquote>
            </div>
          </section>

          {/* IMPACT */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">The Impact</h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Real Success Stories
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our results speak louder than words. Hundreds of students and
                dentists have transformed their confidence, skills, and careers
                through LB Dental Academy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But don't just take our word for it — see it yourself. Check out
                real testimonials, success stories, and workshop moments across
                our platforms:
              </p>
              <div className="space-y-3">
                <a
                  href="https://joinlbstomatology.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">joinlbstomatology.com</span>
                </a>
                <a
                  href="https://lbdentalacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">lbdentalacademy.com</span>
                </a>
                <a
                  href="https://www.instagram.com/lb_stomatology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    Instagram for dentists: @lb_stomatology
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/lbstomatology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    Instagram for students: @lbstomatology
                  </span>
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                LB Dental Academy is more than an educational platform — It's a
                growing community built for the new generation of dentists. And
                we're improving every single day to help you become your best
                version — clinically, professionally, and personally.
              </p>
            </div>
          </section>

          {/* FUTURE */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">The Future</h2>
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                The Next Chapter
              </h3>
              <h4 className="text-xl font-bold text-purple-300">
                LB Stomatology Goes International
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We're expanding beyond Algeria — building a network of learning
                communities across Europe, the Middle East, and North Africa.
                Each one designed to share knowledge, sharpen skills, and
                connect dentists through real, cross-border collaboration.
              </p>
              <p className="text-white font-medium text-lg">
                The mission stays the same: To create confident clinicians — not
                just certified ones.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="text-center space-y-6 pt-4 pb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Build Your Own Growth System?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I turned a small idea into a national brand. Let's build yours
              with the same precision and psychology.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl text-lg md:text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              Book Your Free Strategy Call
            </button>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
