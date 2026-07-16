/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/servicos/sobrepeso",
        destination: "/servicos/sobrepeso-e-obesidade",
        permanent: true
      },
      {
        source: "/servicos/obesidade",
        destination: "/servicos/sobrepeso-e-obesidade",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
