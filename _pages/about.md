---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="hero" id="hero">
  <div class="hero__grid"></div>
  <div class="hero__type" aria-hidden="true">NEWTYPE</div>
  <svg class="hero__psy" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
    <path d="M330,90 L470,90 L520,140 L640,140"/>
    <path d="M300,470 L430,470 L470,430 L600,430"/>
    <path d="M1110,90 L970,90 L920,140 L800,140"/>
    <path d="M1140,470 L1010,470 L970,430 L840,430"/>
    <path class="thin" d="M360,300 L520,300 M1080,300 L920,300"/>
    <circle cx="640" cy="140" r="3"/><circle cx="600" cy="430" r="3"/>
    <circle cx="800" cy="140" r="3"/><circle cx="840" cy="430" r="3"/>
  </svg>
  <figure class="ms ms--l">
    <div class="ms__img"><img src="images/ms-freedom.jpg" alt="ZGMF-X10A Freedom Gundam statue, Shanghai"></div>
    <span class="ms__glow"></span><span class="ms__scan"></span>
    <figcaption class="ms__hud">
      <span class="ms__bay">HANGAR BAY 01 &middot; C.E. 71</span>
      <b class="ms__code">ZGMF-X10A</b>
      <span class="ms__name">FREEDOM</span>
      <span class="ms__spec">H 18.03m &nbsp;/&nbsp; PS ARMOR &nbsp;/&nbsp; N-JAMMER CANCELLER</span>
      <span class="ms__bar"><i style="--v:88%"></i></span>
    </figcaption>
  </figure>
  <figure class="ms ms--r">
    <div class="ms__img"><img src="images/ms-unicorn.jpg" alt="RX-0 Unicorn Gundam statue, DiverCity Tokyo"></div>
    <span class="ms__glow"></span><span class="ms__scan"></span>
    <figcaption class="ms__hud">
      <span class="ms__bay">HANGAR BAY 02 &middot; U.C. 0096</span>
      <b class="ms__code">RX-0</b>
      <span class="ms__name">UNICORN</span>
      <span class="ms__spec">H 19.7m &nbsp;/&nbsp; FULL PSYCHO-FRAME &nbsp;/&nbsp; <span data-ms-mode>UNICORN MODE</span></span>
      <span class="ms__bar"><i style="--v:96%"></i></span>
    </figcaption>
  </figure>
  <div class="hero__inner">
    <div class="hero__rings" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="hero__unit"><b>&#9650;</b> PILOT TERMINAL &nbsp;&middot;&nbsp; UNIT SW-0024 <b>&#9650;</b></div>
    <h2 class="hero__title">Shihao Wang</h2>
    <div class="hero__tag">PERCEIVE<span class="arrow">&#9656;</span>REASON<span class="arrow">&#9656;</span>ACT</div>
    <div class="hero__sub">Ph.D. Candidate, The Hong Kong Polytechnic University</div>
    <div class="hero__chips">
      <a href="mailto:24053277r@connect.polyu.hk"><i class="fas fa-envelope"></i> 24053277r@connect.polyu.hk</a>
      <a href="https://scholar.google.com/citations?user=7TWugs4AAAAJ&amp;hl=en"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
      <a href="#publications"><i class="fas fa-file-alt"></i> Publications</a>
      <span><i class="fas fa-map-marker-alt"></i> PQ515, Dept. of Computing, PolyU</span>
    </div>
  </div>
  <div class="hero__strip" aria-hidden="true"><span>LAUNCH SEQUENCE</span><i></i><span>CATAPULT &middot; GREEN</span><i></i><span data-ms-status>PSYCHO-FRAME &middot; STABLE</span></div>
</div>

<span class="anchor" id="about-me"></span>
<h1><span class="sec-no"></span><i class="fas fa-user-check"></i> About Me</h1>

<p class="intro-lead">I am a Ph.D. candidate in the Department of Computing at The Hong Kong Polytechnic University, advised by Prof. <a href="https://www4.comp.polyu.edu.hk/~cslzhang/">Lei Zhang</a> (IEEE Fellow). My research asks one question: <strong>how should a model represent the physical world efficiently?</strong></p>

<p>A robot or vehicle cannot afford dense pixels, every frame, and coordinates spelled out token by token. It needs a compact state that keeps what matters for acting: <em>what</em> is there, <em>where</em> it is, and <em>how</em> it changes.</p>

<div class="pillars">
  <div class="pillar"><h4><i class="fas fa-cubes"></i> Sparse in space</h4><p><a href="https://arxiv.org/abs/2303.11926">StreamPETR</a> carries a 3D scene through time with a few hundred object queries instead of a dense BEV grid, matching LiDAR-based detectors at a fraction of the cost.</p></div>
  <div class="pillar"><h4><i class="fas fa-bolt"></i> Parallel in output</h4><p><a href="https://arxiv.org/abs/2605.27365">LocateAnything</a> decodes boxes in parallel rather than token by token, across images, robotics, GUIs, and documents; <a href="https://arxiv.org/abs/2511.20648">LocateAnything3D</a> extends this to 3D.</p></div>
  <div class="pillar"><h4><i class="fas fa-film"></i> Selective in time</h4><p><a href="https://arxiv.org/abs/2507.13353">VideoITG</a> keeps only the frames an instruction needs.</p></div>
  <div class="pillar"><h4><i class="fas fa-route"></i> Ready for action</h4><p><a href="https://arxiv.org/abs/2405.01533">OmniDrive</a> and <a href="https://arxiv.org/abs/2406.06978">Hydra-MDP</a> plan directly on these representations; <a href="https://arxiv.org/abs/2602.11124">PhyCritic</a> checks that they are physically correct.</p></div>
</div>

<p>These representations run inside <strong>Cosmos&nbsp;3</strong>, <strong>Isaac GR00T N1.6</strong>, <strong>Vesta</strong>, <strong>Nemotron&nbsp;3 Nano Omni</strong> and <strong>Nemotron&nbsp;3.5 Super</strong>, as well as <strong>Autoware</strong> and <strong>TensorRT on DRIVE</strong>. Next, I aim to unify objects, geometry, and time into a single compact world state that VLA policies can plan on and check against reality over long horizons.</p>

<div class="metrics">
  <div class="metric"><b>2,400+</b><span><i class="fas fa-book-open"></i> Citations</span></div>
  <div class="metric"><b>17</b><span>h-index</span></div>
  <div class="metric"><b>19</b><span>i10-index</span></div>
  <div class="metric"><b>6</b><span>First / co-first author</span></div>
  <div class="metric"><b>26</b><span>Papers &amp; reports</span></div>
</div>
<p class="metrics-src">source: <a href="https://scholar.google.com/citations?user=7TWugs4AAAAJ&amp;hl=en">Google Scholar</a>, Oct 2026</p>

<div class="interests">
  <span class="interest"><i class="fas fa-layer-group"></i> Efficient World Representation</span>
  <span class="interest"><i class="fas fa-crosshairs"></i> Visual Grounding</span>
  <span class="interest"><i class="fas fa-robot"></i> Embodied Planning</span>
</div>

<span class="anchor" id="news"></span>
<h1><span class="sec-no"></span><i class="fas fa-fire"></i> News</h1>
<ul class="news">
  <li><span class="date">2026.10</span><i class="fas fa-file-alt"></i> Released <a href="https://arxiv.org/abs/2610.18829">OmniCompass</a>, a holistic benchmark for omni-modal video grounding and understanding.</li>
  <li><span class="date">2026</span><i class="fas fa-star"></i> <a href="https://arxiv.org/abs/2605.27365">LocateAnything</a> accepted to <strong>ECCV 2026</strong>; DepthMaster accepted to <strong>NeurIPS 2026</strong>.</li>
  <li><span class="date">2026.06</span><i class="fas fa-robot"></i> <a href="https://arxiv.org/abs/2606.20905">Vesta</a> and <a href="https://arxiv.org/abs/2606.02800">Cosmos&nbsp;3</a> are out, with grounding, spatial-understanding and robotics data from my work.</li>
  <li><span class="date">2026.05</span><i class="fas fa-trophy"></i> <a href="https://huggingface.co/papers/2605.27365">LocateAnything</a> is the Hugging Face <strong>#1 Paper of the Day</strong>, with <strong>1M+ downloads</strong> in its first month.</li>
  <li><span class="date">2026.04</span><i class="fas fa-microchip"></i> <a href="https://arxiv.org/abs/2604.24954">Nemotron&nbsp;3 Nano Omni</a> released, with visual grounding and GUI understanding from LocateAnything.</li>
  <li><span class="date">2026</span><i class="fas fa-star"></i> Four papers accepted to <strong>CVPR 2026</strong>: <a href="https://arxiv.org/abs/2507.13353">VideoITG</a> (<strong>Highlight</strong>), <a href="https://arxiv.org/abs/2602.11124">PhyCritic</a>, <a href="https://arxiv.org/abs/2511.20648">LocateAnything3D</a> and VOSR.</li>
  <li><span class="date">2025.09</span><i class="fas fa-star"></i> Two papers accepted to <strong>NeurIPS 2025</strong> (Eagle&nbsp;2.5, DP<sup>2</sup>O-SR).</li>
  <li><span class="date">2025.06</span><i class="fas fa-star"></i> <a href="https://arxiv.org/abs/2503.12030">Hydra-NeXt</a> and InsViE-1M accepted to <strong>ICCV 2025</strong>; contributed to the release of <a href="https://research.nvidia.com/labs/gear/gr00t-n1_5/">GR00T N1.5</a>.</li>
  <li><span class="date">2025.02</span><i class="fas fa-star"></i> <a href="https://arxiv.org/abs/2405.01533">OmniDrive</a> accepted to <strong>CVPR 2025</strong>.</li>
  <li><span class="date">2024.06</span><i class="fas fa-trophy"></i> <strong>1st place</strong> (of 143 teams) &amp; Innovation Award in End-to-End Driving at Scale, and <strong>2nd place</strong> in Driving with Language, CVPR 2024 Autonomous Driving Grand Challenge.</li>
  <li><span class="date">2023.07</span><i class="fas fa-star"></i> <a href="https://arxiv.org/abs/2303.11926">StreamPETR</a> accepted to <strong>ICCV 2023</strong>.</li>
</ul>

<span class="anchor" id="featured"></span>
<h1><span class="sec-no"></span><i class="fas fa-star"></i> Selected Work &amp; Impact</h1>

<div class="featured">

  <div class="fw-card fw-card--wide">
    <a class="fw-media" href="https://arxiv.org/abs/2605.27365"><img src="images/locateanything.jpg" alt="LocateAnything teaser" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">ECCV 2026</span><span class="tag tag--blue">1st author</span><span class="tag tag--hot"><i class="fas fa-fire"></i> HF #1 Paper of the Day</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2605.27365">LocateAnything: Fast and High-Quality Vision-Language Grounding with Parallel Box Decoding</a></h3>
      <p class="fw-desc">A unified grounding model across natural images, robotics, driving, GUIs, and documents. <strong>Parallel Box Decoding</strong> decodes each box or point as a single unit (~2.5&times; faster than the strongest unified model), trained on <strong>LocateAnything-Data</strong> (12M images, 138M queries).</p>
      <p class="fw-desc"><i class="fas fa-download"></i> <strong>1M+ downloads</strong> in one month. Powers grounding in <strong>Nemotron&nbsp;3 Nano Omni</strong> and <strong>Vesta</strong>, and forms the majority of the 2D grounding SFT corpus of <strong>Cosmos&nbsp;3</strong>. Community ports: WebGPU, C++/ggml (LocalAI), GGUF, ComfyUI.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2605.27365"><i class="fas fa-file-alt"></i> Paper</a><a href="https://huggingface.co/papers/2605.27365"><i class="fas fa-external-link-alt"></i> Hugging Face</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://arxiv.org/abs/2511.20648"><img src="images/locateanything3d.jpg" alt="LocateAnything3D teaser" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">CVPR 2026</span><span class="tag tag--blue">Principal contributor</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2511.20648">LocateAnything3D: Vision-Language 3D Detection with Chain-of-Sight</a></h3>
      <p class="fw-desc">Extends VLM-native grounding to 3D with Chain-of-Sight reasoning over distance, size, and pose. SOTA on Omni3D with strong outdoor generalization.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2511.20648"><i class="fas fa-file-alt"></i> Paper</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://arxiv.org/abs/2507.13353"><img src="images/videoitg.png" alt="VideoITG" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">CVPR 2026</span><span class="tag tag--hot"><i class="fas fa-star"></i> Highlight</span><span class="tag tag--blue">1st author</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2507.13353">VideoITG: Multimodal Video Understanding with Instructed Temporal Grounding</a></h3>
      <p class="fw-desc">Instruction-conditioned frame selection for Video-LLMs, supervised by <strong>VidThinker</strong>, an agentic annotation workflow. SOTA on VideoMME, MLVU, and LongVideoBench.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2507.13353"><i class="fas fa-file-alt"></i> Paper</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://arxiv.org/abs/2602.11124"><img src="images/phycritic.jpg" alt="PhyCritic" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">CVPR 2026</span><span class="tag tag--blue">Co-first author</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2602.11124">PhyCritic: Multimodal Critic Models for Physical AI</a></h3>
      <p class="fw-desc">Critic models trained with a two-stage RLVR pipeline, where the critic forms its own prediction before judging candidates, providing reward and verification signals for Physical AI.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2602.11124"><i class="fas fa-file-alt"></i> Paper</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://arxiv.org/abs/2606.20905"><img src="images/vesta.jpg" alt="Vesta" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">2026</span><span class="tag tag--blue">Data engine lead</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2606.20905">Vesta: A Generalist Embodied Reasoning Model</a></h3>
      <p class="fw-desc">Led the data engine for perception and spatial understanding of this generalist embodied reasoning model, which beats individual SOTA baselines by &gt;20% on average.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2606.20905"><i class="fas fa-file-alt"></i> Paper</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://research.nvidia.com/labs/gear/gr00t-n1_6/"><img src="images/groot.jpg" alt="Isaac GR00T" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">NVIDIA</span><span class="tag tag--blue">Core contributor</span></div>
      <h3 class="fw-title"><a href="https://research.nvidia.com/labs/gear/gr00t-n1_6/">Isaac GR00T N1.5 / N1.6</a></h3>
      <p class="fw-desc">Built the vision-language base model on Eagle&nbsp;2.5, introduced <strong>native any-resolution input</strong> to preserve fine spatial detail for robot policies, and owned the large-scale spatial-understanding data.</p>
      <div class="fw-links"><a href="https://research.nvidia.com/labs/gear/gr00t-n1_6/"><i class="fas fa-robot"></i> N1.6</a><a href="https://research.nvidia.com/labs/gear/gr00t-n1_5/"><i class="fas fa-robot"></i> N1.5</a></div>
    </div>
  </div>

  <div class="fw-card">
    <a class="fw-media" href="https://arxiv.org/abs/2303.11926"><img src="images/StreamPETR.png" alt="StreamPETR" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">ICCV 2023</span><span class="tag tag--blue">1st author</span><span class="tag tag--hot">630+ citations</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2303.11926">StreamPETR: Object-Centric Temporal Modeling for Multi-View 3D Detection</a></h3>
      <p class="fw-desc">800+ GitHub stars; followed by Sparse4Dv2/v3, StreamMapNet, and DriveTransformer. Integrated into <a href="https://github.com/autowarefoundation/autoware_universe/tree/main/perception/autoware_camera_streampetr"><strong>Autoware</strong></a> as its first camera-only 3D detection node, and released by NVIDIA as a <a href="https://github.com/NVIDIA/DL4AGX/tree/master/AV-Solutions/streampetr-trt"><strong>TensorRT reference for DRIVE Orin</strong></a>.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2303.11926"><i class="fas fa-file-alt"></i> Paper</a><a href="https://github.com/exiawsh/StreamPETR"><i class="fab fa-github"></i> Code</a></div>
    </div>
  </div>

  <div class="fw-card fw-card--wide">
    <a class="fw-media" href="https://arxiv.org/abs/2405.01533"><img src="images/omnidrive.png" alt="OmniDrive" loading="lazy"></a>
    <div class="fw-body">
      <div class="fw-tags"><span class="tag">CVPR 2025</span><span class="tag tag--blue">1st author</span><span class="tag tag--hot">410+ citations</span></div>
      <h3 class="fw-title"><a href="https://arxiv.org/abs/2405.01533">OmniDrive: A Holistic Vision-Language Dataset for Autonomous Driving with Counterfactual Reasoning</a></h3>
      <p class="fw-desc">A 3D-grounded driving VLM with a counterfactual &ldquo;what-if&rdquo; data pipeline. NVlabs released <a href="https://github.com/NVlabs/OmniDrive/blob/main/deploy/README.md"><strong>TensorRT-LLM / Edge-LLM deployments on DRIVE AGX Thor</strong></a>; a foundation for the DriveLM Challenge.</p>
      <div class="fw-links"><a href="https://arxiv.org/abs/2405.01533"><i class="fas fa-file-alt"></i> Paper</a><a href="https://github.com/NVlabs/OmniDrive"><i class="fab fa-github"></i> Code</a></div>
    </div>
  </div>

</div>

<h2><i class="fas fa-microchip"></i> Inside NVIDIA foundation models</h2>
<div class="fm-strip">
  <a class="fm" href="https://arxiv.org/abs/2606.02800"><b><i class="fas fa-globe"></i> Cosmos 3</b><span>2D grounding &amp; robotics post-training data; reasoning benchmarks</span></a>
  <a class="fm" href="https://arxiv.org/abs/2604.24954"><b><i class="fas fa-eye"></i> Nemotron 3 Nano Omni</b><span>Visual grounding &amp; GUI understanding</span></a>
  <a class="fm" href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf"><b><i class="fas fa-brain"></i> Nemotron 3.5 Super</b><span>Multimodal capabilities</span></a>
  <a class="fm" href="https://arxiv.org/abs/2408.15998"><b><i class="fas fa-layer-group"></i> Eagle family</b><span>Eagle, Eagle 2, Eagle 2.5: post-training data &amp; long-context recipes</span></a>
</div>

<span class="anchor" id="publications"></span>
<h1><span class="sec-no"></span><i class="fas fa-file-alt"></i> Publications</h1>
<p class="pub-note">* Equal contribution. Full list on <a href="https://scholar.google.com/citations?user=7TWugs4AAAAJ&amp;hl=en">Google Scholar</a>.</p>

<h2>Conference &amp; Journal Papers</h2>
<ol class="pub-list">
  <li><strong>Shihao Wang</strong>, Shilong Liu, Yuanguo Kuang, Xinyu Wei, Yangzhou Liu, Zhiqi Li, Yunze Man, Guo Chen, Andrew Tao, Guilin Liu, Jan Kautz, Lei Zhang, Zhiding Yu. <a href="https://arxiv.org/abs/2605.27365">LocateAnything: Fast and High-Quality Vision-Language Grounding with Parallel Box Decoding.</a> <span class="venue">ECCV 2026</span> <span class="tag tag--hot">HF #1 Paper of the Day</span></li>
  <li>Pengfei Wang, <strong>Shihao Wang</strong>, Liyi Chen, Zhiyuan Ma, Guowen Zhang, Lei Zhang. DepthMaster: Unified Monocular Depth Estimation for Perspective and Panoramic Images. <span class="venue">NeurIPS 2026</span></li>
  <li><strong>Shihao Wang</strong>, Guo Chen, De-An Huang, Zhiqi Li, Minghan Li, Guilin Liu, Jan Kautz, Jose M. Alvarez, Lei Zhang, Zhiding Yu. <a href="https://arxiv.org/abs/2507.13353">VideoITG: Multimodal Video Understanding with Instructed Temporal Grounding.</a> <span class="venue">CVPR 2026</span> <span class="tag tag--hot">Highlight</span></li>
  <li>Tianyi Xiong*, <strong>Shihao Wang</strong>*, Guilin Liu, Yi Dong, Ming Li, Heng Huang, Jan Kautz, Zhiding Yu. <a href="https://arxiv.org/abs/2602.11124">PhyCritic: Multimodal Critic Models for Physical AI.</a> <span class="venue">CVPR 2026</span></li>
  <li>Yunze Man, <strong>Shihao Wang</strong>, Guowen Zhang, Johan Bjorck, Zhiqi Li, Liang-Yan Gui, Jim Fan, Jan Kautz, Yu-Xiong Wang, Zhiding Yu. <a href="https://arxiv.org/abs/2511.20648">LocateAnything3D: Vision-Language 3D Detection with Chain-of-Sight.</a> <span class="venue">CVPR 2026</span></li>
  <li>Rongyuan Wu, Lingchen Sun, Zhengqiang Zhang, Xiangtao Kong, Jixin Zhao, <strong>Shihao Wang</strong>, Lei Zhang. VOSR: A Vision-Only Generative Model for Image Super-Resolution. <span class="venue">CVPR 2026</span></li>
  <li>Guo Chen, Zhiqi Li, <strong>Shihao Wang</strong>, Jindong Jiang, Yicheng Liu, Lidong Lu, De-An Huang, Wonmin Byeon, Matthieu Le, Tuomas Rintamaki, et al. <a href="https://arxiv.org/abs/2504.15271">Eagle 2.5: Boosting Long-Context Post-Training for Frontier Vision-Language Models.</a> <span class="venue">NeurIPS 2025</span></li>
  <li>Rongyuan Wu, Lingchen Sun, Zhengqiang Zhang, <strong>Shihao Wang</strong>, et al. DP<sup>2</sup>O-SR: Direct Perceptual Preference Optimization for Real-World Image Super-Resolution. <span class="venue">NeurIPS 2025</span></li>
  <li><strong>Shihao Wang</strong>, Zhiding Yu, Xiaohui Jiang, Shiyi Lan, Min Shi, Nadine Chang, Jan Kautz, Ying Li, Jose M. Alvarez. <a href="https://arxiv.org/abs/2405.01533">OmniDrive: A Holistic Vision-Language Dataset for Autonomous Driving with Counterfactual Reasoning.</a> <span class="venue">CVPR 2025</span></li>
  <li>Min Shi, Fuxiao Liu, <strong>Shihao Wang</strong>, Shijia Liao, Subhashree Radhakrishnan, Yilin Zhao, De-An Huang, Hongxu Yin, Karan Sapra, Yaser Yacoob, et al. <a href="https://arxiv.org/abs/2408.15998">Eagle: Exploring the Design Space for Multimodal LLMs with Mixture of Encoders.</a> <span class="venue">ICLR 2025</span></li>
  <li>Zhenxin Li, <strong>Shihao Wang</strong>, Shiyi Lan, Zhiding Yu, Zuxuan Wu, Jose M. Alvarez. <a href="https://arxiv.org/abs/2503.12030">Hydra-NeXt: Robust Closed-Loop Driving with Open-Loop Training.</a> <span class="venue">ICCV 2025</span></li>
  <li>Yuhui Wu, Liyi Chen, Ruibin Li, <strong>Shihao Wang</strong>, Chenxi Xie, Lei Zhang. InsViE-1M: Effective Instruction-based Video Editing with Elaborate Dataset Construction. <span class="venue">ICCV 2025</span></li>
  <li>Xiaohui Jiang, Shuailin Li, Yingfei Liu, <strong>Shihao Wang</strong>, Fan Jia, Tiancai Wang, Lijin Han, Xiangyu Zhang. <a href="https://arxiv.org/abs/2308.09616">Far3D: Expanding the Horizon for Surround-View 3D Object Detection.</a> <span class="venue">AAAI 2024</span></li>
  <li><strong>Shihao Wang</strong>, Yingfei Liu, Tiancai Wang, Ying Li, Xiangyu Zhang. <a href="https://arxiv.org/abs/2303.11926">Exploring Object-Centric Temporal Modeling for Efficient Multi-View 3D Object Detection (StreamPETR).</a> <span class="venue">ICCV 2023</span> <span class="tag">630+ citations</span></li>
  <li><strong>Shihao Wang</strong>, Xiaohui Jiang, Ying Li. Focal-PETR: Embracing Foreground for Efficient Multi-Camera 3D Object Detection. <span class="venue">IEEE T-IV 2023</span></li>
</ol>

<h2>Preprints &amp; Technical Reports</h2>
<ol class="pub-list pub-list--p">
  <li>Xuyang Liu, <strong>Shihao Wang</strong>, Xinyu Wei, Minghan Li, Zeqing Wang, Zuhao Yang, Zichen Wen, Lei Zhang. <a href="https://arxiv.org/abs/2610.18829">OmniCompass: A Holistic Benchmark for Omni-Modal Video Grounding and Understanding.</a> <span class="venue">arXiv 2026</span></li>
  <li>NVIDIA Nemotron Team. <a href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf">Nemotron 3.5 Super and Lightning.</a> <span class="venue">Technical Report 2026</span></li>
  <li>Johan Bjorck, Zhiqi Li, Yunze Man, Jing Wang, An-Chieh Cheng, Sifei Liu, <strong>Shihao Wang</strong>, Zhiding Yu, et al. <a href="https://arxiv.org/abs/2606.20905">Vesta: A Generalist Embodied Reasoning Model.</a> <span class="venue">arXiv 2026</span></li>
  <li>NVIDIA Cosmos Team. <a href="https://arxiv.org/abs/2606.02800">Cosmos 3: Omnimodal World Models for Physical AI.</a> <span class="venue">arXiv 2026</span> <span class="pub-aside">(Contributor: Reasoner post-training data for 2D grounding and robotics; reasoning benchmarks.)</span></li>
  <li>NVIDIA Nemotron Team. <a href="https://arxiv.org/abs/2604.24954">Nemotron 3 Nano Omni: Efficient and Open Multimodal Intelligence.</a> <span class="venue">arXiv 2026</span></li>
  <li>NVIDIA GEAR Team. <a href="https://research.nvidia.com/labs/gear/gr00t-n1_6/">GR00T N1.5 / N1.6: Open Foundation Models for Generalist Humanoid Robots.</a> <span class="venue">NVIDIA Research 2025</span></li>
  <li>Zhiqi Li, Guo Chen, Shilong Liu, <strong>Shihao Wang</strong>, Vibashan VS, Yishen Ji, Shiyi Lan, Hao Zhang, Yilin Zhao, Subhashree Radhakrishnan, et al. <a href="https://arxiv.org/abs/2501.14818">Eagle 2: Building Post-Training Data Strategies from Scratch for Frontier Vision-Language Models.</a> <span class="venue">arXiv 2025</span></li>
  <li>Min Shi, <strong>Shihao Wang</strong>, Chieh-Yun Chen, Jitesh Jain, Kai Wang, Junjun Xiong, Guilin Liu, Zhiding Yu, Humphrey Shi. <a href="https://arxiv.org/abs/2504.01328">Slow-Fast Architecture for Video Multi-Modal Large Language Models.</a> <span class="venue">arXiv 2025</span></li>
  <li>Yuqian Yuan, Wenqiao Zhang, Xiangtai Li, <strong>Shihao Wang</strong>, et al. <a href="https://arxiv.org/abs/2510.23603">PixelRefer: A Unified Framework for Spatio-Temporal Object Referring with Arbitrary Granularity.</a> <span class="venue">arXiv 2025</span></li>
  <li>Jihao Liu, Zhiding Yu, Shiyi Lan, <strong>Shihao Wang</strong>, Rongyao Fang, Jan Kautz, Hongsheng Li, Jose M. Alvarez. <a href="https://arxiv.org/abs/2412.08646">StreamChat: Chatting with Streaming Video.</a> <span class="venue">arXiv 2024</span></li>
  <li>Zhenxin Li, Kailin Li, <strong>Shihao Wang</strong>, Shiyi Lan, Zhiding Yu, Yishen Ji, Zhiqi Li, Ziyue Zhu, Jan Kautz, Zuxuan Wu, et al. <a href="https://arxiv.org/abs/2406.06978">Hydra-MDP: End-to-End Multimodal Planning with Multi-Target Hydra-Distillation.</a> <span class="venue">arXiv 2024</span> <span class="pub-aside">(Winner, CVPR 2024 End-to-End Driving at Scale Challenge.)</span></li>
</ol>

<span class="anchor" id="honors-and-awards"></span>
<h1><span class="sec-no"></span><i class="fas fa-trophy"></i> Honors &amp; Awards</h1>
<ul class="awards">
  <li><i class="fas fa-fire"></i> Hugging Face #1 Paper of the Day, <a href="https://huggingface.co/papers/2605.27365">LocateAnything</a><span class="yr">2026</span></li>
  <li><i class="fas fa-star"></i> Highlight Paper, <a href="https://cvpr.thecvf.com/virtual/2026/poster/38023">CVPR 2026: VideoITG</a><span class="yr">2026</span></li>
  <li><i class="fas fa-trophy"></i> Winner (1st of 143 teams) &amp; Innovation Award, <a href="https://opendrivelab.com/challenge2024/#end_to_end_driving_at_scale">CVPR 2024 Challenge on End-to-End Driving at Scale</a><span class="yr">2024</span></li>
  <li><i class="fas fa-medal"></i> 2nd Place, <a href="https://opendrivelab.com/challenge2024/#driving_with_language">CVPR 2024 Challenge on Driving with Language</a><span class="yr">2024</span></li>
  <li><i class="fas fa-medal"></i> 1st Place, nuScenes leaderboard on camera-only 3D multi-object tracking<span class="yr">2023</span></li>
</ul>

<span class="anchor" id="educations"></span>
<h1><span class="sec-no"></span><i class="fas fa-university"></i> Education</h1>

<div class="xp">
  <div class="xp__head"><span class="xp__org">The Hong Kong Polytechnic University (PolyU), Department of Computing</span><span class="xp__date">2024.09 &ndash; Present</span></div>
  <div class="xp__role">Ph.D. in Computer Vision, advised by Prof. <a href="https://www4.comp.polyu.edu.hk/~cslzhang/">Lei Zhang</a> (IEEE Fellow)</div>
</div>
<div class="xp">
  <div class="xp__head"><span class="xp__org">Beijing Institute of Technology (BIT), School of Mechanical Engineering</span><span class="xp__date">2021.09 &ndash; 2024.06</span></div>
  <div class="xp__role">M.Sc. in Vehicle Engineering &middot; GPA: 89.5/100</div>
</div>
<div class="xp">
  <div class="xp__head"><span class="xp__org">Beijing Institute of Technology (BIT), School of Mechanical Engineering</span><span class="xp__date">2017.09 &ndash; 2021.06</span></div>
  <div class="xp__role">B.Sc. in Vehicle Engineering &middot; GPA: 87.5/100</div>
</div>

<span class="anchor" id="invited-talks"></span>
<h1><span class="sec-no"></span><i class="fas fa-microphone"></i> Invited Talks</h1>
<ul class="awards">
  <li><i class="fas fa-chalkboard-teacher"></i> <a href="https://www.bilibili.com/video/BV1jH4y1c7rD/">OmniDrive: Advancing autonomous driving 3D perception, reasoning, and planning with large models</a><span class="yr">2024.07</span></li>
  <li><i class="fas fa-chalkboard-teacher"></i> <a href="https://www.bilibili.com/video/BV1EG411a7s3/">Sparse vectorized representation for long-term temporal modeling</a><span class="yr">2023.12</span></li>
  <li><i class="fas fa-chalkboard-teacher"></i> <a href="https://www.bilibili.com/video/BV1sp4y137fh/">How can BEV perception be achieved without BEV features?</a><span class="yr">2023.08</span></li>
</ul>

<span class="anchor" id="services"></span>
<h1><span class="sec-no"></span><i class="fas fa-users"></i> Academic Services</h1>
<ul class="awards">
  <li><i class="fas fa-clipboard-check"></i> <strong>Conference Reviewer:</strong>&nbsp;CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR</li>
  <li><i class="fas fa-book-open"></i> <strong>Journal Reviewer:</strong>&nbsp;IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI)</li>
  <li><i class="fas fa-users"></i> <strong>Workshop Organizer:</strong>&nbsp;<a href="https://openreview.net/forum?id=IWdHE8Bk1B">OpenReview Workshop</a><span class="yr">2026</span></li>
</ul>

<p class="site-credits">&copy; Shihao Wang &middot; Paper figures are from the respective publications. Hero photos via Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:Freedom_Gundam_statue_in_Shanghai.jpg">Freedom Gundam statue</a> by Conniecc120121 (CC BY 4.0); <a href="https://commons.wikimedia.org/wiki/File:Life-Sized_Unicorn_Gundam_Statue.jpg">Unicorn Gundam statue</a> (CC0).</p>
