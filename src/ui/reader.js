/* ====== READER v2 ====== */
.reader {
  padding: 16px 18px calc(88px + env(safe-area-inset-bottom));
}

.reader-top {
  position: sticky;
  top: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 16px 12px 10px;
  margin: -16px -12px 8px;
  background:
    linear-gradient(180deg, rgba(17,16,22,.92), rgba(17,16,22,.82) 60%, rgba(17,16,22,0) 100%);
  backdrop-filter: blur(8px);
}

.reader-back {
  width: 44px; height: 44px;
  display: grid; place-items: center;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.12);
  background: #2b2836;
  color: var(--ink, #fff);
}

.reader-title {
  font-size: 42px;
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: .2px;
}

.reader-sub {
  margin-top: 6px;
  font-size: 18px;
  color: rgba(255,255,255,.64);
}

.reader-chips {
  display: flex;
  gap: 8px;
}

.chip {
  height: 36px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.14);
  background: #25232e;
  color: #fff;
  font-weight: 600;
}

/* Список стихов */
.verses {
  display: grid;
  gap: 18px;
  margin-top: 8px;
}

.verse {
  display: grid;
  grid-template-columns: 28px 1fr;
  column-gap: 12px;
  align-items: start;
}

.v-num {
  color: #E3FF5E;           /* акцентный жёлтый */
  font-weight: 800;
  font-size: 20px;
  line-height: 1;
  padding-top: 6px;
}

.v-text {
  color: #fff;
  font-size: 19px;
  line-height: 1.55;
}
