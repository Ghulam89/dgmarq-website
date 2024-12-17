import React from "react";
import GameAccountCard from "../Cards/GameAccountCard";
const gameAccounts = [
  {
    image: "https://images.g2a.com/uiadminimages/270x185/1x1x1/0343f6e4608e/f7eccc679d9b462282cb167e",
    title: "Buying an Account: Why is it Worth Your Consideration?",
    description: "",
    buttonText: "Learn more",
    badge: null,
  },
  {
    image: "https://images.g2a.com/uiadminimages/570x400/1x1x1/a76a6eca06b1/bf7700739da54b24a72345ab",
    title: "Minecraft Java & Bedrock",
    description: "GAME ACCOUNT",
    buttonText: "Check details",
    badge: "GAME ACCOUNT",
  },
  {
    image: "https://images.g2a.com/uiadminimages/270x400/1x1x1/64badd078697/be56ac0cd8fc4a71ba6c6caa",
    title: "Baldur's Gate: Digital Deluxe Upgrade",
    description: "",
    buttonText: "Check details",
    badge: "GAME ACCOUNT",
  },
];

const GameAccountsSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Game accounts</h2>
        <p className="text-sm text-gray-600 mb-6">
          Experience the latest gaming releases with brand-new accounts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gameAccounts.map((account, index) => (
            <GameAccountCard key={index} {...account} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameAccountsSection;
