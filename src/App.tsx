import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Layout, 
  FileText, 
  UserCircle, 
  Edit3, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Send,
  Star,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Làm slide thuyết trình",
    desc: "Thiết kế PowerPoint/Canva chuyên nghiệp, bắt mắt.",
    benefits: ["Thiết kế đẹp", "Nội dung rõ ràng", "Giao nhanh đúng deadline"]
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Viết đơn xin thực tập",
    desc: "Hỗ trợ soạn thảo đơn xin thực tập chuẩn chỉnh, thuyết phục.",
    benefits: ["Đúng form mẫu", "Ngôn ngữ chuyên nghiệp", "Tăng tỷ lệ được nhận"]
  },
  {
    icon: <UserCircle className="w-8 h-8 text-primary" />,
    title: "Thiết kế CV chuyên nghiệp",
    desc: "Tạo CV ấn tượng giúp bạn nổi bật trong mắt nhà tuyển dụng.",
    benefits: ["Layout hiện đại", "Tối ưu ATS", "Thể hiện chất riêng"]
  },
  {
    icon: <Edit3 className="w-8 h-8 text-primary" />,
    title: "Chỉnh sửa CV",
    desc: "Tối ưu hóa CV cũ của bạn để phù hợp với từng vị trí ứng tuyển.",
    benefits: ["Sửa lỗi trình bày", "Nâng cấp nội dung", "Tư vấn từ khóa"]
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Viết nội dung thuyết trình",
    desc: "Soạn kịch bản, nội dung chi tiết cho bài nói của bạn.",
    benefits: ["Logic chặt chẽ", "Dễ nhớ, dễ trình bày", "Đúng trọng tâm"]
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Dịch vụ hỗ trợ khác",
    desc: "Bất cứ việc gì liên quan đến học tập mà bạn đang cần gấp.",
    benefits: ["Linh hoạt theo yêu cầu", "Bảo mật thông tin", "Hỗ trợ 24/7"]
  }
];

const painPoints = [
  {
    title: "Deadline dí sát giờ",
    desc: "Chỉ còn vài tiếng nữa là thuyết trình mà slide vẫn chưa đâu vào đâu? Đừng lo!"
  },
  {
    title: "Mù công nghệ, ngại làm slide",
    desc: "Nội dung thì có mà không biết làm sao cho đẹp, cho chuyên nghiệp để lấy điểm A?"
  },
  {
    title: "Lần đầu viết CV/Đơn thực tập",
    desc: "Không biết bắt đầu từ đâu, viết gì cho ngầu để doanh nghiệp gật đầu cái rụp?"
  },
  {
    title: "Hồ sơ nhìn 'phèn' quá",
    desc: "Bạn có năng lực nhưng hồ sơ trình bày chưa tới, làm mất đi cơ hội quý giá?"
  }
];

const whyUs = [
  { icon: <Clock className="w-6 h-6" />, text: "Làm nhanh – Tuyệt đối đúng deadline" },
  { icon: <Star className="w-6 h-6" />, text: "Thiết kế chuyên nghiệp, sáng tạo" },
  { icon: <DollarSign className="w-6 h-6" />, text: "Giá cực mềm, chuẩn sinh viên" },
  { icon: <Edit3 className="w-6 h-6" />, text: "Hỗ trợ chỉnh sửa đến khi hài lòng" },
  { icon: <CheckCircle2 className="w-6 h-6" />, text: "Bảo mật thông tin khách hàng" }
];

const steps = [
  { num: "01", title: "Liên hệ gửi yêu cầu", desc: "Inbox Messenger hoặc Zalo yêu cầu của bạn." },
  { num: "02", title: "Báo giá nhanh", desc: "Tụi mình sẽ xem xét và báo giá 'hạt dẻ' ngay." },
  { num: "03", title: "Tiến hành thực hiện", desc: "Team bắt tay vào xử lý deadline cho bạn." },
  { num: "04", title: "Gửi file hoàn chỉnh", desc: "Nhận file qua mail/zalo hoặc nhận bản in tận tay." }
];

const testimonials = [
  { name: "Anh Tuấn", major: "K45 Quản trị Kinh doanh", text: "Slide đẹp xuất sắc, thầy cô khen quá trời. Cứu mình một bàn thua trông thấy sát giờ thuyết trình!" },
  { name: "Minh Thư", major: "K46 Kế toán", text: "CV làm xong nhìn chuyên nghiệp hẳn, mình nộp đơn thực tập là được gọi đi phỏng vấn ngay. Cảm ơn team!" },
  { name: "Hoàng Nam", major: "K44 Marketing", text: "Giá rẻ mà làm có tâm cực kỳ, sửa đi sửa lại mấy lần vẫn vui vẻ. Sẽ ủng hộ dài dài!" }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary selection:text-primary">
      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Zap className="text-secondary w-6 h-6 fill-secondary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">Gấp Là Gặp</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#dich-vu" className="hover:text-primary transition-colors">Dịch vụ</a>
          <a href="#tai-sao" className="hover:text-primary transition-colors">Tại sao chọn</a>
          <a href="#quy-trinh" className="hover:text-primary transition-colors">Quy trình</a>
        </div>
        <a href="#dat-dich-vu" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/20">
          Đặt ngay
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/20 text-primary font-bold text-sm border border-secondary/30">
              🚀 Dành riêng cho sinh viên HUE
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-primary leading-tight mb-4">
              Gấp Là Gặp
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-6 italic">
              "Deadline dí, tụi tôi xử lý."
            </p>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Dịch vụ hỗ trợ sinh viên HUE xử lý nhanh các công việc học tập và hồ sơ khi deadline cận kề. Đừng để deadline làm bạn mất ngủ!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#dat-dich-vu" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25 flex items-center gap-2">
                Đặt dịch vụ ngay <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#dat-dich-vu" className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
                Xem dịch vụ
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <img 
              src="https://iili.io/qnnBJpe.png" 
              alt="Trường Đại học Kinh tế - Đại học Huế" 
              className="rounded-3xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 object-cover h-[400px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Có phải bạn đang...</h2>
            <p className="text-slate-500">Những tình huống "dở khóc dở cười" mà sinh viên nào cũng gặp</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-2xl">😫</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="dich-vu" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-slate-500">Giải pháp toàn diện cho mọi nhu cầu học tập</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="tai-sao" className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-primary">Tại sao nên chọn <br/><span className="text-secondary bg-primary px-4 py-1 rounded-xl inline-block mt-2">Gấp Là Gặp?</span></h2>
            <div className="grid gap-4">
              {whyUs.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 bg-linear-to-br from-primary to-accent rounded-[40px] text-white shadow-2xl shadow-primary/20"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-black">Cam kết từ team</h3>
              <p className="text-white/80 mt-4 italic text-lg leading-relaxed">"Tụi mình hiểu cái cảm giác deadline dí nó thốn cỡ nào. Yên tâm giao phó, tụi mình sẽ 'cứu' bạn ngoạn mục!"</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl text-center border border-white/10">
                <div className="text-4xl font-black text-secondary mb-1">100%</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-bold">Đúng hạn</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl text-center border border-white/10">
                <div className="text-4xl font-black text-secondary mb-1">500+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-bold">Dự án xong</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="quy-trinh" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Quy trình làm việc</h2>
            <p className="text-slate-500">Đơn giản, nhanh chóng, không rườm rà</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-slate-200/50">
                  <span className="text-xl font-black">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="dat-dich-vu" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-primary mb-6">Gửi yêu cầu dịch vụ</h2>
              <p className="text-lg text-slate-600 mb-8">Điền thông tin bên dưới, tụi mình sẽ liên hệ lại báo giá và tư vấn ngay trong vòng 5-10 phút!</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Hotline / Zalo</div>
                    <div className="text-primary font-black text-xl">0787617262</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email</div>
                    <div className="text-primary font-bold">dichvu@gaplagap.net</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-slate-100"
            >
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại / Zalo</label>
                    <input type="tel" placeholder="0905 xxx xxx" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Loại dịch vụ</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                    <option>Làm slide thuyết trình</option>
                    <option>Viết đơn xin thực tập</option>
                    <option>Thiết kế CV chuyên nghiệp</option>
                    <option>Chỉnh sửa CV</option>
                    <option>Viết nội dung thuyết trình</option>
                    <option>Dịch vụ khác</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Yêu cầu chi tiết (Deadline khi nào?)</label>
                  <textarea rows={4} placeholder="Mô tả ngắn gọn yêu cầu của bạn..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20">
                  Gửi yêu cầu ngay
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Feedback từ "đồng môn"</h2>
            <p className="text-slate-500">Hàng trăm sinh viên đã vượt qua deadline thành công</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.major}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-primary to-accent rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Zap className="absolute top-10 left-10 w-32 h-32 rotate-12" />
            <Zap className="absolute bottom-10 right-10 w-32 h-32 -rotate-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Deadline đang dí?</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Đừng để áp lực làm bạn mệt mỏi. Liên hệ ngay với Gấp Là Gặp để được hỗ trợ nhanh nhất!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-secondary text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-black/20 flex items-center gap-2">
              Đặt dịch vụ ngay <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex gap-4">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-5 rounded-2xl transition-all border border-white/20">
                <MessageCircle className="w-8 h-8" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-5 rounded-2xl transition-all border border-white/20">
                <Send className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Zap className="text-secondary w-5 h-5 fill-secondary" />
            </div>
            <span className="font-bold text-lg tracking-tight text-primary">Gấp Là Gặp</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-slate-500 text-sm">
            <div className="flex flex-wrap justify-center gap-6 font-bold text-slate-700">
              <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> 0787617262</span>
              <span className="flex items-center gap-2"><Send className="w-4 h-4 text-primary" /> dichvu@gaplagap.net</span>
            </div>
            <div>© 2024 Gấp Là Gặp. Dành cho sinh viên HUE với ❤️</div>
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Zalo</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
