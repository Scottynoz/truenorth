# 🚀 Quick Start Guide - Start Earning Commissions TODAY

## ✅ What's Already Done

Your website is live and ready to earn commissions! Here's what's set up:

### Website Features:
- ✅ 10+ sections with affiliate product links
- ✅ Affiliate disclosure in footer (legally required)
- ✅ Google Analytics tracking code (just needs your ID)
- ✅ Secure credit application forms
- ✅ Financing section with lender listings
- ✅ Password-protected admin dashboard
- ✅ Business cost/profit analysis tools

---

## 🎯 STEP 1: Amazon Associates (DO THIS FIRST - 15 minutes)

### 1. Sign Up
1. Go to: https://affiliate-program.amazon.ca/
2. Click "Sign Up"
3. Complete the application (use your website: truenorthtiny.ca)
4. Wait for approval (usually instant for Canada)

### 2. Get Your Store ID
Once approved, you'll get a Store ID like: `truenorthtiny-20`

### 3. Update Your Website
Open file: `/src/config/affiliateLinks.ts`

Change this line:
```typescript
export const AMAZON_CA_ID = 'YOUR-AMAZON-CA-ID-20'
```

To your actual ID:
```typescript
export const AMAZON_CA_ID = 'truenorthtiny-20'
```

### 4. Also Sign Up for Amazon US
1. Go to: https://affiliate-program.amazon.com/
2. Same process
3. Get your US Store ID
4. Update: `export const AMAZON_US_ID = 'truenorthtiny0c-20'`

---

## 🎯 STEP 2: Google Analytics (10 minutes)

### 1. Create Account
1. Go to: https://analytics.google.com/
2. Sign in with Google account
3. Click "Start measuring"
4. Create property for "True North Tiny Homes"
5. Get your Tracking ID (looks like: G-XXXXXXXXXX)

### 2. Update Your Website
Open file: `/index.html`

Find and replace BOTH instances of:
```html
G-XXXXXXXXXX
```

With your actual tracking ID:
```html
G-ABC123DEF0
```

### 3. Rebuild and Deploy
```bash
npm run build
# Then deploy again
```

---

## 🎯 STEP 3: Lender Affiliate Programs (30 minutes)

### Apply to These Programs:

| Lender | Sign Up Link | Commission |
|--------|--------------|------------|
| **LightStream** | https://app.impact.com | $100-300/loan |
| **SoFi** | https://www.sofi.com/affiliates/ | $100-150/loan |
| **Upstart** | https://www.upstart.com/partners | $75-200/loan |

### Update Links in Financing.tsx
Once approved, replace the placeholder links with your affiliate links.

---

## 🎯 STEP 4: Contact Builders (1 hour)

### Use These Email Templates:
Open: `/OUTREACH_EMAILS.md`

### Top 5 Builders to Contact:
1. **Teacup Tiny Homes** - info@teacuptinyhomes.com
2. **Summit Tiny Homes** - info@summittinyhomes.com  
3. **Bunkie Life** - info@bunkielife.com
4. **Kaldees** - info@kaldees.com
5. **Mint Tiny Homes** - info@minttinyhomes.com

### Suggested Commission Rates:
- Tiny Home Builders: $500-$1,000 per sale
- Bunkie/Cabin Kits: $100-$250 per sale

---

## 📊 Tracking Your Earnings

### Use This Spreadsheet:
Open: `/TRACKING_SPREADSHEET.csv`

Import into Google Sheets or Excel to track:
- All commissions earned
- Application status
- Builder partnerships
- Website metrics

---

## 💰 Expected Earnings (Realistic)

### Month 1-3 (Getting Started):
- Amazon sales: $50-200/month
- Lender referrals: $0-300/month
- Builder referrals: $0-500/month
- **Total: $50-1,000/month**

### Month 6-12 (Growing):
- Amazon sales: $200-500/month
- Lender referrals: $500-1,500/month
- Builder referrals: $1,000-3,000/month
- **Total: $1,700-5,000/month**

### Year 2+ (Established):
- **Potential: $5,000-10,000+/month**

---

## 🔗 Quick Link Reference

### Your Website:
- **Live Site:** https://vhzxmgf5gq66q.ok.kimi.link
- **Admin Dashboard:** https://vhzxmgf5gq66q.ok.kimi.link/#admin
- **Admin Password:** `TrueNorth2024!`

### Affiliate Programs:
- Amazon CA: https://affiliate-program.amazon.ca/
- Amazon US: https://affiliate-program.amazon.com/
- Impact (LightStream): https://app.impact.com
- SoFi Affiliates: https://www.sofi.com/affiliates/

---

## ⚠️ Legal Requirements (IMPORTANT!)

### You MUST:
1. ✅ Disclose affiliate relationships (already done in footer)
2. ✅ Include "Affiliate link" text near links (already done)
3. ✅ Have a Privacy Policy (already included)
4. ✅ Comply with CASL for Canadian emails

### Already Done:
- Footer disclosure banner ✅
- "Affiliate link" text on all product buttons ✅
- Privacy policy in Financing section ✅

---

## 📈 Growth Tips

### To Increase Traffic:
1. Write blog posts about tiny home topics
2. Create YouTube videos of tiny home tours
3. Post on Instagram/TikTok
4. Join tiny home Facebook groups
5. Answer questions on Reddit r/TinyHouses

### To Increase Conversions:
1. Add video testimonials
2. Create comparison tools
3. Offer free downloadable guides
4. Add live chat support
5. Send email newsletters

---

## 🆘 Need Help?

### Common Issues:

**Q: My Amazon links aren't working**
A: Make sure you replaced `YOUR-AMAZON-CA-ID-20` with your actual Store ID

**Q: Google Analytics shows no data**
A: It takes 24-48 hours to start seeing data. Also check your tracking ID is correct.

**Q: How do I know if I'm earning commissions?**
A: Log into Amazon Associates dashboard to see real-time earnings.

**Q: When do I get paid?**
A: Amazon pays monthly (60 days after month end). Lenders vary (30-60 days).

---

## ✅ Final Checklist

Before you start earning:

- [ ] Signed up for Amazon Associates CA
- [ ] Signed up for Amazon Associates US
- [ ] Updated affiliateLinks.ts with your Store IDs
- [ ] Signed up for Google Analytics
- [ ] Updated index.html with your Tracking ID
- [ ] Applied to at least 1 lender affiliate program
- [ ] Emailed at least 3 builders
- [ ] Set up tracking spreadsheet
- [ ] Rebuilt and deployed website

---

## 🎉 You're Ready!

Once you complete the checklist above, you'll be earning commissions on every sale!

**Questions?** Check the detailed guides:
- `AFFILIATE_SETUP.md` - Complete affiliate setup guide
- `OUTREACH_EMAILS.md` - Email templates for builders
- `TRACKING_SPREADSHEET.csv` - Commission tracking template

**Good luck! 🚀**
