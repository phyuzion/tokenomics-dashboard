import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@project-serum/anchor";
import idl from "../idl/essentiallux.json";

// 클러스터 및 프로그램 ID
export const CLUSTER = "https://api.devnet.solana.com";
export const PROGRAM_ID = "9xu4SyXFV5ktthzKFRahjJqZW7kMF9DMPNMjbW9pPiKT";

// Anchor 프로그램 로드
export const loadProgram = async (wallet) => {
  const connection = new Connection(CLUSTER, "confirmed");
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });
  const program = new Program(idl, PROGRAM_ID, provider);
  return { provider, program };
};

// 계정 데이터 조회
export const fetchAccountData = async (program, accountType, filters = []) => {
  const accounts = await program.account[accountType].all(filters);
  return accounts.map(({ publicKey, account }) => ({
    publicKey,
    ...account,
  }));
};

// 프로그램 메서드 호출
export const callMethod = async (program, methodName, accounts, args) => {
  return await program.methods[methodName](...args).accounts(accounts).rpc();
};
