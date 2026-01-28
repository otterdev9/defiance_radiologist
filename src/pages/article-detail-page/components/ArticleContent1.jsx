import React from 'react';

const ArticleContent1 = () => {
  return (
    <div className="article-periarticular-calcification">
      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg text-foreground leading-relaxed mb-4">
          Periarticular calcification is a frequent (and sometimes deceptively alarming) imaging finding.
          A systematic approach—first confirming <code className="text-accent bg-accent/10 px-2 py-1 rounded">calcification vs ossification vs foreign body</code>,
          then <code className="text-accent bg-accent/10 px-2 py-1 rounded">localizing</code> the deposit (tendon, bursa/capsule, intra‑articular, subcutaneous, vascular, or true mass)—
          often narrows the differential dramatically and prevents unnecessary workup.
          This article provides a "pictorial" pattern‑based framework for X‑ray and CT interpretation, with key pitfalls and red flags.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">X‑ray</span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">CT</span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">DDx</span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">MSK</span>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="bg-primary/5 border border-border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Table of Contents</h2>
        <div className="flex flex-wrap gap-3">
          <a 
            href="#approach" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Approach
          </a>
          <a 
            href="#pattern" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Pattern Atlas
          </a>
          <a 
            href="#hadd" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            HADD / Calcific Tendinitis
          </a>
          <a 
            href="#cppd" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            CPPD
          </a>
          <a 
            href="#synovial-chondro" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Synovial Chondromatosis
          </a>
          <a 
            href="#tumoral" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Tumoral Calcinosis / Calcinosis
          </a>
          <a 
            href="#myositis" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Myositis Ossificans / HO
          </a>
          <a 
            href="#vascular" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Vascular & Phleboliths
          </a>
          <a 
            href="#gout" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Gout & Tophi
          </a>
          <a 
            href="#tumor" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Calcified Tumors (When to Worry)
          </a>
          <a 
            href="#checklists" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            Checklists
          </a>
          <a 
            href="#refs" 
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground border border-border rounded-full text-sm transition-all hover:border-secondary/60 hover:shadow-[0_0_0_3px_rgba(122,162,255,0.15)]"
          >
            References
          </a>
        </div>
      </nav>

      {/* Section 1: Approach */}
      <section id="approach" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">1) A Practical Approach (What to decide first)</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-7 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Step 1 — Is it really calcification?</h3>
            <p className="text-foreground leading-relaxed mb-4">
              On radiographs, <strong>calcification</strong> typically appears as mineral density <em>less dense than cortex</em> and lacks
              internal trabeculae. <strong>Ossification</strong> shows a cortical/trabecular organization (mature bone pattern), and early ossification
              may be subtle. CT is more sensitive for detection and characterization and can help separate
              calcification (often ~100–400 HU) from trabecular/cortical bone (higher HU) as well as from foreign bodies. 
              MRI can miss calcifications—correlate with radiographs/CT whenever the clinical story and MR edema look "out of proportion."
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6108965/" target="_blank" rel="noopener" className="text-accent hover:underline">[Source]</a>
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 2 — Where is it?</h3>
            <p className="text-foreground leading-relaxed mb-3">
              Location strongly constrains the differential:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">Intra‑tendinous / enthesis</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">Bursal/capsular/peri‑tendinous</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">Intra‑articular</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">Subcutaneous / fascial planes</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">Vascular (phleboliths / arterial)</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">True soft‑tissue mass</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6108965/" target="_blank" rel="noopener" className="text-accent hover:underline">[Source]</a>
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">"High‑yield" quick triage</h3>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Amorphous, cloud‑like peri‑tendinous calcification</p>
              <p className="text-sm text-muted-foreground">
                Think <a href="#hadd" className="text-secondary hover:underline">HADD / calcific tendinitis</a> (especially around shoulder; may migrate into bursa; may mimic infection/tumor in acute phase).
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Thin/linear "cartilage" calcification</p>
              <p className="text-sm text-muted-foreground">
                Think <a href="#cppd" className="text-secondary hover:underline">CPPD / chondrocalcinosis</a> (hyaline cartilage or fibrocartilage; often in older patients).
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Multiple similar intra‑articular bodies, ring‑and‑arc</p>
              <p className="text-sm text-muted-foreground">
                Think <a href="#synovial-chondro" className="text-secondary hover:underline">synovial chondromatosis</a>.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Large lobulated periarticular "bursal" mass ± fluid‑calcium levels</p>
              <p className="text-sm text-muted-foreground">
                Think <a href="#tumoral" className="text-secondary hover:underline">tumoral calcinosis / renal failure calcinosis</a>.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Peripheral "zonal" ossification developing over weeks</p>
              <p className="text-sm text-muted-foreground">
                Think <a href="#myositis" className="text-secondary hover:underline">myositis ossificans / heterotopic ossification</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-warning/10 border-l-4 border-warning p-4 rounded">
          <p className="text-foreground">
            <strong>Pitfall:</strong> Acute periarticular calcification can mimic septic arthritis, fracture, or sarcoma clinically and on MRI due to striking edema.
            Correlation with radiographs/CT often reveals the calcific focus and prevents unnecessary aspiration/biopsy.
          </p>
        </div>
      </section>

      {/* Section 2: Pattern Atlas */}
      <section id="pattern" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">2) Pattern Atlas ("Pictorial" Mental Images)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">A. Amorphous / Cloud-like (often hydroxyapatite)</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Typical</strong>: oval/rounded, homogeneous to fluffy, peri‑tendinous or peri‑capsular.</li>
              <li><strong>Acute phase</strong>: less dense, ill‑defined, "fluffy," may fragment; intense surrounding edema on MRI.</li>
              <li><strong>Key DDx</strong>: HADD / acute calcific periarthritis; tumoral calcinosis (usually larger, lobulated); dystrophic calcification in connective tissue disease.</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3 italic">Key concept: amorphous calcification favors crystal deposition and metabolic/inflammatory causes over cartilaginous tumors.</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">B. Linear / Stratified (cartilage, fibrocartilage, tendons)</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Hyaline cartilage</strong>: parallel to subchondral bone (classic chondrocalcinosis).</li>
              <li><strong>Fibrocartilage</strong>: menisci, TFCC, labrum, pubic symphysis; thin linear deposits.</li>
              <li><strong>Key DDx</strong>: CPPD; (less commonly) other causes of cartilage mineralization.</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">C. Ring‑and‑Arc / Popcorn (chondroid matrix)</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Intra‑articular multiple nodules</strong>: synovial chondromatosis (often many similar bodies).</li>
              <li><strong>Soft‑tissue mass</strong>: chondroid tumors (benign or malignant) can share this pattern—context and behavior matter.</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">D. Zonal Ossification (peripheral & maturing)</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Peripheral maturation</strong> (cortex-like rim) with a relatively lucent center is classic for myositis ossificans.</li>
              <li><strong>Time course</strong>: often not obvious on early radiographs; evolves over weeks.</li>
              <li><strong>Key DDx</strong>: extraskeletal osteosarcoma (often more central mineralization and aggressive features).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: HADD */}
      <section id="hadd" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          3) Hydroxyapatite Deposition Disease (HADD) / Calcific Tendinitis / Acute Calcific Periarthritis
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-7 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Imaging "pictorial" signature</h3>
            <ul className="space-y-3 text-foreground">
              <li><strong>X‑ray</strong>: amorphous, cloudlike peri‑tendinous deposit; may be well-defined in formative/resting phases and become fluffy/ill-defined in resorptive phase.</li>
              <li><strong>CT</strong>: very sensitive; shows high-density focus and helps confirm a calcific nidus when MRI is confusing.</li>
              <li><strong>MRI pitfall</strong>: calcification may be subtle, while edema/bursitis can be striking; GRE/SWI can help.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Clinical/imaging phases (why it "changes shape")</h3>
            <p className="text-foreground leading-relaxed">
              HADD can move through precalcific → calcific (formative/resting/resorptive) → postcalcific stages; the resorptive phase is often the most painful
              and produces ill-defined calcification and intense inflammatory reaction. This is also when cortical erosions or intraosseous migration may mimic tumor/infection.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key differentiators</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Clue</th>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-card">
                    <td className="px-4 py-3 text-foreground"><strong>Amorphous peri‑tendinous calcification</strong></td>
                    <td className="px-4 py-3 text-muted-foreground">Strongly supports hydroxyapatite deposition disease rather than CPPD (linear) or synovial chondromatosis (ring-and-arc bodies).</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-4 py-3 text-foreground"><strong>Symptoms drop within days; resolve weeks</strong></td>
                    <td className="px-4 py-3 text-muted-foreground">Typical acute calcific periarthritis course; misdiagnosis is common and may lead to unnecessary antibiotics/admission.</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-4 py-3 text-foreground"><strong>No organized trabeculae/cortex</strong></td>
                    <td className="px-4 py-3 text-muted-foreground">Favors calcification over heterotopic ossification.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Classic examples</h3>
            <p className="text-sm text-muted-foreground mb-4">Representative images for visual reference</p>
            
            <div className="space-y-4">
              <div className="border border-border rounded-lg overflow-hidden">
                <img
                  src="https://sspark.genspark.ai/cfimages?u1=aOn5dsHfZuFKnWjh1pHfuhStnkZWRvF5Bt1v9vE2%2B4FlGB%2Bl3cABUt3w5sHNwBLH8Vqfx6fwdeVNCUV4ltNInOY4PeyydpF1S5H1NBmQdsjvP%2F6sZM%2F%2FNBnioHsJ1qaFFQM%3D&u2=NCxNXeeQkaudohtt&width=2560"
                  alt="Calcific tendinitis radiograph example"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-muted">
                  <p className="text-sm text-muted-foreground">
                    Calcific tendinitis example image (radiograph).{' '}
                    <a href="https://en.wikipedia.org/wiki/Calcific_tendinitis" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden">
                <img
                  src="https://sspark.genspark.ai/cfimages?u1=63ILXzXF3Gd0s%2BKfhTqREuPtd83aVBVZLkwSrWmMMYJWKjq%2FEVtMkFIyS1gU%2BF4wDPGhz9iHmQm7aptbvoJ13fajHY8rav8FSr8Ox6aZ1QL0V4ewSYN0YEEEm%2Bc7VHENq11pbjsMMA8igdVd%2BCMx11kp4MGneWfSfdA%3D&u2=tCCyWhcCuLjuTiuj&width=2560"
                  alt="Calcific tendinitis Radiopaedia example"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-muted">
                  <p className="text-sm text-muted-foreground">
                    Calcific tendinitis (Radiopaedia thumbnail).{' '}
                    <a href="https://radiopaedia.org/articles/calcific-tendinitis" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
          <p className="text-foreground">
            <strong>Practical reporting tip:</strong> describe tendon involved, size, and whether margins are well-defined vs fluffy/ill-defined (often symptomatic).
            Mention any migration into bursa/joint and any cortical erosion/intraosseous extension if present.
          </p>
        </div>
      </section>

      {/* Section 4: CPPD */}
      <section id="cppd" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          4) CPPD (Chondrocalcinosis) & Crystal Arthropathy Pattern
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Imaging "pictorial" signature</h3>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Radiograph</strong>: thin, linear calcification in hyaline cartilage (parallel to subchondral bone) and/or fibrocartilage (menisci, TFCC), often in older adults.</li>
              <li><strong>Tendons/ligaments</strong>: CPPD can also calcify tendons/ligaments as delicate linear/stratified mineralization—distinct from HADD's amorphous nodules.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Where to look (quick screening set)</h3>
            <p className="text-foreground leading-relaxed">
              When CPPD is suspected, a pragmatic radiographic screen often includes knees, wrists, and pelvis for chondrocalcinosis and distribution typical of CPPD arthropathy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key differential points</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">CPPD</th>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">HADD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-card">
                    <td className="px-4 py-3 text-muted-foreground">Linear/stratified cartilage/tendon calcification; older demographic.</td>
                    <td className="px-4 py-3 text-muted-foreground">Amorphous peri-tendinous calcification; may acutely inflame and migrate.</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-4 py-3 text-muted-foreground">Often multi-joint pattern (knees/wrists/pubic symphysis/hip).</td>
                    <td className="px-4 py-3 text-muted-foreground">Often focal tendon-centric (classic shoulder), though can occur elsewhere.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-warning/10 border border-warning rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">Important pitfall</h3>
            <p className="text-foreground">
              On MRI, cartilage or meniscal chondrocalcinosis may mimic a tear; correlation with radiographs helps avoid false-positive MRI interpretations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Synovial Chondromatosis */}
      <section id="synovial-chondro" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          5) Synovial Chondromatosis (Intra‑articular Calcified Bodies)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Imaging "pictorial" signature</h3>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>X‑ray</strong>: multiple intra-articular calcifications, often similar in size/shape; may show ring-and-arc chondroid mineralization.</li>
              <li><strong>CT</strong>: best to define calcified/ossified bodies and erosions from pressure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Primary vs secondary (conceptual)</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Primary synovial chondromatosis: many similarly sized bodies; may cause pressure erosions and increased joint space.
              Secondary: loose bodies of varying sizes in the setting of underlying osteoarthritis.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Key DDx</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>CPPD</strong>: linear cartilage calcification rather than "loose bodies."</li>
              <li><strong>HADD</strong>: peri-tendinous amorphous calcification rather than intra-articular nodules.</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Example image</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=J3hvzp%2BebZ2tovWti0TRWmMluRwbMzFOFB1dKXMtMsIGqTmI0JXt9jyBeRT4ex%2BbdO%2FtqxQmzW1919MtgOT7OszQkPFY%2B%2FHcBp%2B2%2BhSkcJmWE8k4LJnmZF15fiYzDltgED9dhfCgO%2FxTG3X0V3St6D3%2BHjATxWyf&u2=5b74H8U7qCDt%2FRYK&width=2560"
                alt="Synovial chondromatosis radiographic example"
                className="w-full h-auto"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm text-muted-foreground">
                  Synovial chondromatosis (Radiopaedia thumbnail).{' '}
                  <a href="https://radiopaedia.org/articles/synovial-chondromatosis" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tumoral Calcinosis */}
      <section id="tumoral" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          6) Tumoral Calcinosis & Systemic Calcinosis (Renal Failure, Connective Tissue Disease)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Imaging "pictorial" signature</h3>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Large lobulated periarticular masses</strong>, often in a bursal distribution and typically at extensor surfaces; may show fluid‑calcium levels.</li>
              <li><strong>CT</strong> helps map the extent and internal levels, and assess bone erosion (can occur especially in secondary forms).</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Idiopathic vs secondary ("mimics")</h3>
            <p className="text-foreground leading-relaxed">
              Periarticular calcified masses that resemble tumoral calcinosis may also arise from chronic renal failure/hemodialysis and other metabolic states,
              and from collagen-vascular disease (systemic sclerosis, dermatomyositis) where superficial/subcutaneous or sheet-like calcifications can occur.
              Workup typically includes calcium/phosphate balance and renal function, and consideration of rheumatologic disease when the pattern is superficial/multifocal.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">Example images</h3>
            
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=B4cIE1UARTQWM1Muv5kXPpc%2BEPXi6v1CcIdZ8PHk9FgInJnZWbOqSn7Wrar075FA0nuYLxy%2BToefo65K0%2FlhziQUNSZwsZwGcHlIHgiUtO9a0SWiJRkC1qOfGHmk6%2Br%2FKfY%2FEhmGX939zSC5Hw%3D%3D&u2=rKjXmpk32FvesDuL&width=2560"
                alt="Tumoral calcinosis example"
                className="w-full h-auto"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm text-muted-foreground">
                  Tumoral calcinosis (Radiopaedia thumbnail).{' '}
                  <a href="https://radiopaedia.org/cases/tumoral-calcinosis-5" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=0iqEdAzJcPT2i%2BWopoPOWAtmB9tBjvjDo8uv006oi5zl6BM9AUyaw8LPre7Gh8xw7Rd%2BQDzIcKyyNjndiVKy%2BoYexGfTM%2FVwW%2BOEqHUzTXeCRLL1FkACtuFfhl3tXIHCHzvzBofJUh09Lnvv8OdgcJLJnS1Rx8sDDyGoI5oR70podSWxExO4%2Bh4DTAdhZV9O8sQDVgDuqaala7vf75WQq18iG%2Fy1gvTxn0xHx%2FawWZDW23oylt9Fwhch6MjDqchVEIWoFkPy&u2=na0QY%2Fep15Q0FBtL&width=2560"
                alt="Multiple uremic tumoral calcinosis example"
                className="w-full h-auto"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm text-muted-foreground">
                  Uremic tumoral calcinosis (Frontiers thumbnail).{' '}
                  <a href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2023.1249680/full" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Myositis Ossificans */}
      <section id="myositis" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          7) Myositis Ossificans / Heterotopic Ossification (HO)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Imaging "pictorial" signature</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The key concept is the <strong>zone phenomenon</strong>: ossification matures <strong>from the periphery inward</strong> (peripheral/centripetal),
              which helps distinguish it from malignant entities such as extraskeletal osteosarcoma that tend to mineralize more centrally (central/centrifugal).
            </p>
            <ul className="space-y-3 text-foreground">
              <li><strong>Early radiographs</strong>: may be normal; repeat imaging later reveals peripheral ossification.</li>
              <li><strong>CT</strong>: sensitive for early mineralization and defines the maturing rim.</li>
              <li><strong>US</strong>: can depict early zonation even before obvious ossification on radiographs in some cases.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key DDx</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>HADD</strong>: lacks organized peripheral cortex/trabeculae; often tendon-based.</li>
              <li><strong>Extraskeletal osteosarcoma</strong>: consider if mineralization is central, lesion enlarges, or features are aggressive.</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Example image</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=mQAB7IKpgtyQTkerxnG10dl%2BnLVEF%2BhjiOsp2BTbv1hem8E6UjGKt4C3Yv5jRGRjZQRsx4JMccOkPIE6n%2BsDGSbzzuiRbiCWVYxvy0Xnzv9PQlTNlh6wDLduNx4NhxbBAhE4z3GWX4EdG%2FkS4GGRZTDMXwctUDmcaVk%3D&u2=v2L1a6X7PMY5M4ns&width=2560"
                alt="Myositis ossificans example"
                className="w-full h-auto"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm text-muted-foreground">
                  Myositis ossificans (Radiopaedia thumbnail).{' '}
                  <a href="https://radiopaedia.org/cases/myositis-ossificans-14" target="_blank" rel="noopener" className="text-accent hover:underline">Source link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Vascular */}
      <section id="vascular" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          8) Vascular Calcifications & Phleboliths
        </h2>

        <div className="bg-muted/30 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-foreground mb-3">Phleboliths (venous malformation / hemangioma clue)</h3>
          <p className="text-foreground leading-relaxed mb-4">
            Round calcifications with a central lucency ("target-like") are classic for <strong>phleboliths</strong> and support venous malformation/hemangioma,
            especially when multiple. CT is more sensitive for detecting phleboliths.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Arterial calcification</h3>
          <p className="text-foreground leading-relaxed">
            Arterial calcification may appear as parallel "tram-track" type calcification; interpretation depends on whether the process is intimal (atherosclerosis) or medial/metabolic.
          </p>
        </div>
      </section>

      {/* Section 9: Gout */}
      <section id="gout" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          9) Gout & Tophi (Calcification is usually late)
        </h2>

        <div className="bg-muted/30 rounded-lg p-5">
          <p className="text-foreground leading-relaxed mb-4">
            On plain radiographs, gout classically produces erosions; calcification within tophi is typically a later finding and may be more common with coexisting renal disease.
            When gout is in the differential for a periarticular calcified mass, consider clinical context and advanced imaging approaches (e.g., dual-energy CT in appropriate settings).
          </p>
          <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
            <p className="text-foreground">
              Practical point: gout and CPPD can coexist; when joint aspiration is performed clinically, infection should still be excluded because crystal arthropathy and sepsis can coexist.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Tumors */}
      <section id="tumor" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          10) When Periarticular Calcification Might Be a Tumor (Red Flags)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Benign lesions that can look scary</h3>
            <p className="text-foreground leading-relaxed">
              Several benign entities can simulate malignancy, especially when edema/enhancement is prominent or when mineralization is immature.
              Examples include myositis ossificans (early), calcific tendinopathy with osseous involvement, and venous malformations with phleboliths.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Malignant considerations (pattern + context)</h3>
            <p className="text-foreground leading-relaxed">
              A true soft-tissue mass with calcifications may represent entities such as synovial sarcoma (calcifications can be present),
              or other sarcomas with dystrophic mineralization. The key is behavior: a discrete growing mass, aggressive margins, neurovascular encasement, or atypical location/pattern
              should prompt dedicated cross-sectional imaging and multidisciplinary evaluation.
            </p>
          </div>
        </div>

        <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
          <p className="text-foreground">
            <strong>Do not overcall acute HADD/ACP as tumor:</strong> intense edema on MRI plus subtle calcification on X‑ray/CT is a classic trap.
            Always "reverse-search" for a calcific nidus in the tendon/capsule when the clinical story is acute.
          </p>
        </div>
      </section>

      {/* Section 11: Checklists */}
      <section id="checklists" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          11) Reporting & Differential Diagnosis Checklists
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">Radiograph/CT description checklist</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Location</strong>: tendon/enthesis vs capsule/bursa vs intra-articular vs subcutaneous vs vascular vs mass.</li>
              <li><strong>Morphology</strong>: amorphous vs linear vs ring-and-arc vs zonal ossification vs phleboliths.</li>
              <li><strong>Size & number</strong>: solitary vs multifocal vs innumerable bodies.</li>
              <li><strong>Bone response</strong>: erosion (pressure or inflammatory), periosteal reaction, marrow extension.</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-foreground mb-3">"Most likely" short DDx by compartment</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-3 py-2 text-left text-foreground font-semibold">Compartment</th>
                    <th className="px-3 py-2 text-left text-foreground font-semibold">High-yield DDx</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-card">
                    <td className="px-3 py-2 text-foreground"><strong>Tendon/peritendon</strong></td>
                    <td className="px-3 py-2 text-muted-foreground">HADD/calcific tendinitis (amorphous); CPPD (linear/stratified).</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-3 py-2 text-foreground"><strong>Intra-articular</strong></td>
                    <td className="px-3 py-2 text-muted-foreground">CPPD; synovial chondromatosis (multiple bodies, ring-and-arc).</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-3 py-2 text-foreground"><strong>Periarticular mass-like</strong></td>
                    <td className="px-3 py-2 text-muted-foreground">Tumoral calcinosis (idiopathic or secondary/renal); calcinosis in systemic sclerosis/dermatomyositis.</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-3 py-2 text-foreground"><strong>Intramuscular with maturing rim</strong></td>
                    <td className="px-3 py-2 text-muted-foreground">Myositis ossificans / HO (zonal).</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-3 py-2 text-foreground"><strong>Vascular</strong></td>
                    <td className="px-3 py-2 text-muted-foreground">Phleboliths (venous malformation/hemangioma); arterial "tram-track" calcification.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: References */}
      <section id="refs" className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          12) References (Core reading)
        </h2>
        <ul className="space-y-3">
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6108965/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Radiological identification and analysis of soft tissue musculoskeletal calcifications (Insights Imaging, 2018)
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9197888/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Acute calcific periarthritis — a commonly misdiagnosed pathology
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10453434/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Hydroxyapatite Deposition Disease: A Comprehensive Review (Diagnostics, 2023)
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3354355/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Myositis ossificans imaging: keys to successful diagnosis
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6813287/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Calcified or ossified benign soft tissue lesions that may simulate malignancy (Skeletal Radiol, 2019)
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11988457/" target="_blank" rel="noopener" className="text-accent hover:underline">
              Pictorial Review of Soft Tissue Lesions with Calcification (Diagnostics, 2025)
            </a>
          </li>
        </ul>
      </section>

      {/* Educational Disclaimer */}
      <div className="bg-accent/10 border border-accent rounded-xl p-6">
        <p className="text-foreground mb-4">
          <strong>Educational disclaimer:</strong> This article is for educational purposes and does not replace clinical judgment,
          clinical history, lab correlation, or specialist consultation.
        </p>
        <p className="text-lg font-bold text-foreground">Dr. Hassan Semaan</p>
      </div>
    </div>
  );
};

export default ArticleContent1;
