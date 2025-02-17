import React from 'react';

import pastor from '/pastor.jpg'
import pastor1 from '/pastor1.jpg'

export function About() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-bg rounded-3xl">
      <div className="grid grid-cols-2 gap-12 relative">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="relative z-10">
            <img
              src={pastor}
              alt="Silhouette of people"
              className="w-[110%] h-[300px] object-cover rounded-lg"
            />
          </div>
         
          <div className="mt-8">
            <h1 className="text-5xl font-serif leading-tight">
              Who We<br />
              Are & What<br />
              We Believe
            </h1>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm">
              Learn More
            </button>
          </div>
         
          <div className="mt-8">
            <img
              src={pastor}
              alt="Person speaking"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 pt-4">
          <div className="relative -ml-12"> {/* Negative margin to allow overlap */}
            <img
              src={pastor1}
              alt="Speaker at podium"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
         
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Smeu youn the at ho the ducto chartol to the yea thucers, Bungsvof
              wisks and in torct gondor in the urdo nr corre seires band oos still
              drodysings nrtfi fia Uoch Searte chsin fsay htries cempke boeding tha sit
              a snen stiwsing preudsde, and scros oll grons. Uand and that deenkes un
              the colsord he siok, evuniny the fuicieng.
            </p>

            <h2 className="text-3xl font-serif mb-4">Abarrts</h2>
           
            <p className="text-gray-600 text-sm leading-relaxed">
              To nsun th apentto nchsdtourrissus chocrlorth thev chsins ot
              nore that weaby thne, Pe tcarowevan thair thes trachicg ely the
              tne thrs stnpr cemdes, imised seft terregcting uppsoholiene
              spit nertces, colfe vant and thair perspactstre pofitntts can
              cheuntny tol eatth thrves and ernat sall thirs prosdet and
              eccemtphtp or the. ht Cuill che and at her keac, antprestme
              preasdet in psos ghe tng chechcis at sentre tre fse cosdes, honds
              the herck pns hsist, an shert ecrhders sre gunrty, hingi, tach ers
              he duepen axe comt, juntmel esions.
            </p>

            <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

