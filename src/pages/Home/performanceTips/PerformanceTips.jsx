

const PerformanceTips = () => {
    const performanceTips = [
        'Practice regularly to build muscle memory.',
        'Focus on proper posture and hand positioning.',
        'Break down challenging sections into smaller parts.',
        'Use a metronome to improve timing and rhythm.',
        'Record and review your performances for self-assessment.',
        'Experiment with different techniques to find your unique style.',
        'Stay relaxed and manage performance anxiety with deep breaths.',
        'Collaborate with other musicians for valuable feedback.',
        'Explore different genres to broaden your musical skills.',
      ];
    
      return (
        <section className="bg-gray-200 pb-8">
          <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Performance Tips</h1>
      </header>
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc pl-6">
              {performanceTips.map((tip, index) => (
                <li key={index} className="text-lg mb-2">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
};

export default PerformanceTips;