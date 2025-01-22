import React from 'react';
import Head from 'next/head';
import { Construction, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Metal Martins - Em Construção</title>
        <meta
          name="description"
          content="Metal Martins."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900 text-white flex items-center justify-center p-4">
        <div className="text-center space-y-8">
          {/* Icon Container */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur opacity-75 animate-pulse" />
            <div className="relative bg-zinc-900 rounded-full p-4">
              <Construction className="w-16 h-16 text-yellow-500 animate-bounce" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">
            Em Construção
          </h1>

          {/* Message */}
          <div className="space-y-4 max-w-lg">
            <p className="text-xl text-gray-300">
              Site em desenvolvimento
            </p>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <p className="text-gray-300">
                Estamos construindo uma experiência digital à altura que sua empresa merece.
                <br />
                <span className="text-yellow-500 font-medium mt-2 block">
                  Em breve, novidades incríveis!
                </span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center space-x-2 text-gray-400">
              <Wrench className="w-4 h-4" />
              <span>Em construção</span>
            </div>
            <p className="text-sm text-gray-500">
              Desenvolvido por{' '}
              <span className="text-orange-500 font-medium">
                Eduardo H. Pollheim
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}