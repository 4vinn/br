"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const BPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const [blog, setBlog] = useState<any>({});
  const [contentHeadings, setContentHeadings] = useState<any>([]);

  useEffect(() => {
    axios.post("/api/blog", {
      is_report: false,
      slug: slug
    }).then((res) => {
      setBlog(res.data.data);
    }).catch((error: any) => {
      console.log(error);
    })

    const headings = document.querySelectorAll('h1');
    const list_of_content_array: any[] = [];
    for (let x = 0; x < headings.length; x++) {
      list_of_content_array.push(
        <li className="cursor-pointer" key={x} onClick={() => {
          headings[x].scrollIntoView();
        }}>{headings[x].textContent}</li>
      )
    }
    setContentHeadings(list_of_content_array);
  }, [slug])

  const variable = `<p><br></p>
  <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><strong style="font-weight:normal;" id="docs-internal-guid-9c54bbbc-7fff-6c7f-e254-e62d97f7514a"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span style="border:none;display:inline-block;overflow:hidden;width:602px;height:133px;"><img src="https://lh7-us.googleusercontent.com/GopEZQ1e2k9L9gCi9wRe10ke0MeOFhftvn1Mr2QrdUSg0mWMpNtf6PK4igQVfFAm_eznIRpboeAyJRG2NsHM-MLdLbB1mndu_MEmu6IZYDnVZoeYlVru4flXJFKK6vCTzlyNrsawGUjrHUkMQPa_C9k" width="602" height="133" style="margin-left:0px;margin-top:0px;"></span></span></strong></p>
  <p><strong style="font-weight:normal;" id="docs-internal-guid-9c54bbbc-7fff-6c7f-e254-e62d97f7514a"><br>
      </strong></p>
  <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><strong style="font-weight:normal;" id="docs-internal-guid-9c54bbbc-7fff-6c7f-e254-e62d97f7514a"><span style="font-size:16pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">February 9, 2024</span></strong></p>
  <p><strong style="font-weight:normal;" id="docs-internal-guid-9c54bbbc-7fff-6c7f-e254-e62d97f7514a"><br>
          <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:16pt;font-family:Merriweather,serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jaivardhan Singh Shekhawat</span></p>
          <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13.999999999999998pt;font-family:Merriweather,serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">jaivardhan1433@gmail.com</span></p>
          <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Summary</span></h1>
          <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:12pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid is a decentralized exchange focusing on perpetual futures trading. The following </span><span style="font-size:13pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">key points cover the gist of the project:</span></p>
          <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
              <li dir="ltr" style="list-style-type:disc;font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
                  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:6pt;margin-bottom:0pt;" role="presentation"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">It has a custom-built Layer 1 blockchain for perpetual derivatives trading, offering a trading experience similar to centralized exchanges.</span></p>
              </li>
              <li dir="ltr" style="list-style-type:disc;font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
                  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The platform aims to provide users with high speed, low fees, and unique contracts, catering to experienced traders seeking efficiency and advanced functionalities.</span></p>
              </li>
              <li dir="ltr" style="list-style-type:disc;font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
                  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid initiated a points campaign for an impending airdrop to reward active users.</span></p>
              </li>
              <li dir="ltr" style="list-style-type:disc;font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
                  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Risks associated with Hyperliquid include market liquidity, smart contract vulnerabilities, and Oracle manipulation.</span></p>
              </li>
              <li dir="ltr" style="list-style-type:disc;font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
                  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:12pt;" role="presentation"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Transparency issues regarding project team details need to be addressed for Hyperliquid to establish trust and solidify its position in the decentralized exchange</span></p>
              </li>
          </ul>
          <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Investment Thesis</span></h1>
          <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Overview</span></h2>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid presents an innovative infrastructure with a decentralized order-book architecture, leveraging a custom-built Layer 1 blockchain for perpetual derivatives trading. With just one click and no need to sign every transaction while trading, it offers a trading experience akin to CEX. Hyperliquid wants everyone to have the best execution, lowest costs, and total transparency when trading cryptocurrency.&nbsp;</span></p>
          <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Drivers of Thesis</span></h2>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid is a relatively new decentralized exchange (DEX) specializing in perpetual futures trading. It offers innovative features like high speed, low fees, and unique contracts, targeting experienced traders seeking efficiency and advanced functionalities. It leverages a custom-built Layer 1 blockchain tailored for derivatives trading. This architecture delivers high performance akin to centralized exchanges and maintains decentralization at its core, achieving consistent transaction order through BFT consensus. The platform's provision of exotic perpetual contracts, covering a spectrum beyond conventional assets like Bitcoin and Ethereum, broadens trading horizons for users, offering access to early-stage tokens and stocks. Such diversity caters to varied trading interests and fosters speculation on innovative investment opportunities.</span></p><br>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Moreover, Hyperliquid's commitment to security is underscored by regular audits, ensuring resilience against potential vulnerabilities. With a sound margin system featuring margin checks and isolated margin functionality, the platform enhances stability amidst price fluctuations, bolstering user confidence in its security measures. It also has strategy pools (Vaults) where users can deposit their USDC and be profitable.</span></p><br>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The DEX market is rapidly growing, fueled by demand for secure and self-custodial trading. Perpetual futures are also seeing increasing popularity due to their leveraged nature. Hyperliquid currently does not have a token, making traditional valuation methods inapplicable. However, its high trading volume and growing user base indicate strong potential.</span></p>
          <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Risks to Thesis</span></h2>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">However, concerns regarding centralization emerge, given Hyperliquid's operation on its proprietary Layer 1 blockchain, which contrasts with established decentralized solutions like Ethereum. The team's control over all validators and protocol management raises questions about decentralization and governance. Moreover, risks associated with smart contracts and the Layer 1 blockchain pose significant threats. Flaws or vulnerabilities within the Arbitrum bridge or Hyperliquid's infrastructure could compromise user funds. A lot depends on how well the team will handle the airdrop allocation after the token reward points period ends in April 2024.</span></p>
          <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Protocol Overview</span></h1>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid operates as a decentralized exchange for perpetual futures contracts, utilizing an order book system. Unlike traditional centralized exchanges (CEXs), Hyperliquid conducts all activities on-chain, running on the purpose-built Hyperliquid L1 blockchain. This blockchain, powered by Tendermint for consensus, ensures high performance, enabling every order, cancellation, trade, and liquidation to occur transparently on-chain with a block latency of less than a second. Presently, the chain supports an impressive throughput of 20,000 orders per second</span></p>
          <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid L1</span></h2>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The Hyperliquid L1 blockchain is purpose-built to operate efficiently as a derivative exchange, prioritizing performance and throughput. Unlike other blockchains, it does not intend to accommodate general-purpose smart contracts, allowing for aggressive optimizations to create a decentralized exchange (DEX) that efficiently rivals centralized exchanges (CEXs). Within the L1 state, critical components such as margin and matching engine states are encompassed, eliminating the need for off-chain order books. Complete decentralization is a core design principle achieved through one consistent order of transactions facilitated by BFT consensus. Consensus is currently implemented using a specialized version of Tendermint, fine-tuned to optimize end-to-end latency, which refers to the duration between sending a request and receiving the committed response.</span></p><br>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hyperliquid has been meticulously developed to enable comprehensive optimizations from the ground up, devoid of reliance on frameworks like the Cosmos SDK. The L1 state transition logic, written in Rust, interfaces with Tendermint through an ABCI server. Security on the Hyperliquid L1 is maintained through proof of stake, with staking and slashing mechanisms operating similarly to those on Cosmos chains. Further details on betting and slashing will be disclosed upon the launch of the native token.</span></p><br>
          <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">At the heart of the exchange's state on the Hyperliquid L1 lies the clearinghouse, which manages the margin state of each address, including balances and positions. The Hyperliquid L1 state also features an order book for each asset, functioning akin to centralized exchanges. Operations on the order book are executed with reference to the clearinghouse, ensuring efficient and transparent trading mechanisms.</span></p>
          <br>
      </strong></p><br>
  <p><br></p>`

  const content = document.createElement('div');
  content.innerHTML = variable;

  return (
    <div className="w-full">
      <div className="pl-1 pr-1 w-[84vw] m-auto flex flex-row">
        <div className="toc mt-5 pt-5 border-[1px] border-solid border-dark text-dark  rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto ">
          <div className="border-b-[1px] border-[#28281e] w-[20vw] py-2 text-xl font-medium">
            Table of contents
          </div>
          <div className="pt-3">
            <ul>
              {contentHeadings.map((content: any) => {
                return content
              })}
            </ul>
          </div>
        </div>

        <div className="post pt-5 w-[60vw] pl-[3.25rem]">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-medium py-5 w-full text-left">
              Some Title for the Blog Post
            </h1>

            <div className="meta w-full flex text-[.8rem] text-[#28281e] border-b-[2px] pb-[.5rem] gap-20">
              <span>Author</span>
              <span>Date</span>
              <span className="text-[#55ee6ac9] px-1 py-[0.1rem] text-[.78rem] border border-[#55ee6ac9]">
                #Tag
              </span>
            </div>
            {<div dangerouslySetInnerHTML={{ __html: variable }}></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPage;
