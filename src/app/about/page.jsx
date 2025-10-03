export default function AboutPage() {
  return (
    <div className="py-48 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700">About Plantish</h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering sellers and delighting shoppers with a next-gen
            e-commerce experience.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🚀 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Tree Sell, our mission is to make buying and selling products
            simple, transparent, and rewarding. We empower merchants to grow
            their businesses while delivering a seamless, secure, and enjoyable
            shopping experience for customers.
          </p>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            💡 What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "🌱 Tree-Based Seller Network",
                desc: "Our unique tree structure helps sellers grow and earn more effectively.",
              },
              {
                title: "⚡ Blazing-Fast Performance",
                desc: "Built on MERN + Next.js for lightning-fast browsing and checkout.",
              },
              {
                title: "🔒 Secure Transactions",
                desc: "Your data and payments stay protected with robust security measures.",
              },
              {
                title: "📦 Seamless Order Management",
                desc: "Easily list products, manage orders, and track deliveries.",
              },
              {
                title: "📈 Growth-Focused Tools",
                desc: "Analytics dashboards and promotional tools to grow your business.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            👨‍💻 Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tree Sell was created by a team of passionate developers who saw the
            challenges faced by small businesses trying to scale online. We
            envisioned a platform that doesn’t just list products but builds
            connections—like the branches of a tree—helping sellers and
            customers grow together.
          </p>
        </section>

        {/* Vision */}
        <section className="text-center bg-green-100 rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🌏 Looking Ahead
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our vision is to become the go-to platform for smart e-commerce,
            empowering millions of entrepreneurs and customers worldwide. At
            Tree Sell, we’re not just building an e-commerce platform — we’re
            building a community.
          </p>
        </section>
      </div>
    </div>
  );
}
